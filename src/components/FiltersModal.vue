<template>
  <div class="app_modal">
    <div class="container">
      <div class="header">
        <label>Filters Modal</label>
        <button class="exit" @click="close()">
          <div class="icon"></div>
        </button>
      </div>
      <div class="content">
        <selector-vue
          :options_props="dont_show_filters"
          :selected_option="{ name: 'Добавить фильтр' }"
          @select="add_filter"
        />
        <keep-alive>
          <filter-list
            :show_filters="show_filters"
            @updateFiltersValue="updateFiltersValue"
          />
        </keep-alive>
        <div class="accept_btn">
          <button @click="useFilters()" class="accept">Показать</button>
        </div>
        <main-grid
          class="main_grid"
          :data="data"
          :collval="collval"
          @update_changeValue="update_changeValue"
        />
      </div>
      <div class="footer">
        <div class="btns">
          <button class="btn btn1" @click="close()">Назад</button>
          <button class="btn btn2" @click="accept()">Добавить к сделке</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterList from "@/components/FiltersList.vue";
import SelectorVue from "@/components/SelectorVue.vue";
import MainGrid from "@/components/MainGrid.vue";
import { reactive, ref } from "@vue/reactivity";
import { computed, nextTick, onMounted, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    FilterList,
    SelectorVue,
    MainGrid,
  },
  emits: {
    close: null,
    update_changeValue: null,
  },
  setup(props, { emit }) {
    const store = useStore();
    const params1 = computed(() => {
      return store.getters.params;
    });
    const params = ref([]);
    params1.value.forEach((val) => {
      params.value.push(val);
    });
    params.value.pop();
    params.value.shift();
    const show_filters = ref([true, true, true, true, true]);
    onMounted(() => feelParams());
    watch(
      () => show_filters,
      () => {
        nextTick(() => feelParams());
      }
    );
    const dont_show_filters = ref([]);
    const feelParams = () => {
      let arr = [];
      params.value.forEach((val, idx) => {
        if (show_filters.value[idx] !== true) {
          const obj = {
            name: val,
            value: idx,
          };
          arr.push(obj);
        }
      });
      dont_show_filters.value = arr;
    };
    const add_filter = (option) => {
      show_filters.value[params.value.indexOf(option.name)] = true;
    };
    const close = () => {
      emit("close");
    };
    const accept = () => {
      let array = [];
      changeValue.value.forEach((val, idx) => {
        if (val) {
          array.push(data.value[idx]);
        }
      });
      emit("update_changeValue", array);
      close();
    };

    const arg1 = computed(() => {
      return store.getters.data;
    });
    const arg2 = computed(() => {
      return store.getters.service;
    });
    let dat = [];
    arg2.value.forEach((val) => dat.push(val));
    arg1.value.forEach((val) => dat.push(val));
    const data = ref(dat);
    const update_data = () => {
      data.value = [];
      dat.forEach((val) => {
        data.value.push(reactive(val));
      });
    };
    data.value = data.value.sort((a, b) => a[0].localeCompare(b[0]));

    const collval = [
      true,
      true,
      false,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
    ];

    const changeValue = ref([]);
    const update_changeValue = (arr) => {
      arr.forEach((val, idx) => {
        changeValue.value[idx] = val;
      });
    };

    const filtersValue = ref([]);
    const updateFiltersValue = (value) => {
      filtersValue.value = value;
    };

    const includes = (arr, Value, idx) => {
      const result = [];
      arr.forEach((item) => {
        item[idx].split(" ").forEach((name) => {
          if (name.includes(Value)) {
            result.push(item);
          }
        });
      });
      return result;
    };
    const eqval = (arr, Value, idx) => {
      const result = [];
      arr.forEach((item) => {
        if (item[idx] == Value) {
          result.push(item);
        }
      });
      return result;
    };

    const useFilters = () => {
      update_data();
      const arr = [0, 1];
      arr.forEach((idx) => {
        console.log(filtersValue.value[idx].value);
        if (
          filtersValue.value[idx].value != "" &&
          filtersValue.value[idx].value != null &&
          filtersValue.value[idx].value != undefined
        ) {
          const dat = [];
          data.value.forEach((val) => dat.push(val));
          data.value = [];
          if (filtersValue.value[idx].option == 1) {
            eqval(dat, filtersValue.value[idx].value, idx).forEach((val) =>
              data.value.push(val)
            );
          }
          if (filtersValue.value[idx].option == 2) {
            includes(dat, filtersValue.value[idx].value, idx).forEach((val) =>
              data.value.push(val)
            );
          }
        }
      });
    };

    return {
      close,
      accept,
      show_filters,
      dont_show_filters,
      add_filter,
      data,
      collval,
      update_changeValue,
      updateFiltersValue,
      useFilters,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
.app_modal {
  pointer-events: all;
  z-index: 9999999;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  .container {
    width: 90%;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    margin: 30px auto;
    outline: 0;
    box-shadow: 0 0 7px 6px rgb(206 212 218 / 50%);
    text-align: left;
    display: flex;
    flex-direction: column;
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 50px;
      @include font(500, 20px);
      border-bottom: 2px solid #dee2e6;
      .exit {
        background: transparent;
        border-radius: 0 5px 5px 0;
        height: 30px;
        width: 30px;
        margin: 0 auto;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.15s ease-in-out,
          box-shadow 0.15s ease-in-out;
        margin: 0;
        margin-right: -10px;
        .icon {
          width: inherit;
          height: inherit;
          transition: transform 0.15s ease-in-out;
          @include bg_image("@/assets/cross_black.svg", 100% 100%);
        }
        .icon:hover {
          transform: rotate(90deg);
        }
      }
    }
    .content {
      @include font(400, 16px);
      padding: 15px 50px;
      border-bottom: 2px solid #dee2e6;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .v-select {
        width: 300px;
      }
      .main_grid {
        overflow-x: auto;
        max-width: 100%;
      }
      .accept_btn {
        text-align: right;
        .accept {
          cursor: pointer;
          padding: 6px 12px;
          height: 36px;
          width: 200px;
          border: none;
          color: #fff;
          background-color: #6c757d;
          @include font(400, 16px);
          border-radius: 5px;
          transition: background-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
        .accept:hover {
          background-color: #5f676d;
          box-shadow: 0 0 5px 2px rgb(95 103 109 / 25%);
        }
      }
    }
    .footer {
      display: flex;
      justify-content: end;
      padding: 15px 50px;
      .btns {
        display: flex;
        flex-direction: row;
        gap: 10px;

        .btn {
          cursor: pointer;
          padding: 6px 12px;
          height: 36px;
          border: none;
          @include font(400, 16px);
          border-radius: 5px;
          transition: background-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
        .btn1 {
          color: #fff;
          background-color: #6c757d;
        }
        .btn1:hover {
          background-color: #5f676d;
          box-shadow: 0 0 5px 2px rgb(95 103 109 / 25%);
        }
        .btn2 {
          color: #fff;
          background-color: #0d6efd;
        }
        .btn2:hover {
          background-color: #0256d4;
          box-shadow: 0 0 5px 2px rgb(2 86 212 / 25%);
        }
      }
    }
  }
}
</style>
