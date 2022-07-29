<template>
  <div class="app" :class="{ disable: show_filters }">
    <div class="container">
      <div class="header"></div>
      <div class="content">
        <div class="top">
          <selector-vue
            :options_props="short_data"
            @select="select"
            :selected_option="{
              name: 'Добавление (поиск на складе по названию или артикулу)...',
            }"
          />
          <div class="btns">
            <input
              type="checkbox"
              class="checkbox"
              v-model="show_cards"
              id="grid"
            />
            <label for="grid"></label>
            <button class="btn" @click="show_filters = true">
              <div class="icon"></div>
            </button>
          </div>
        </div>
        <div class="bottom" v-if="show_cards">
          <div class="links">
            <div v-for="(cat, idx) in selected_categoryes" :key="cat">
              <a
                href="#"
                @click="
                  sel_idx = idx;
                  selected_categoryes.splice(idx);
                "
                >{{ path[idx] }}
              </a>
              <span> /</span>
            </div>
          </div>
          <div
            class="path"
            v-for="(item, i) in path"
            :key="item"
            v-show="sel_idx == i && show_categoryes"
          >
            <!-- <h2>{{ item }}:</h2> -->
            <div class="grid">
              <div
                class="card"
                v-for="select in categoryes[item]"
                :key="select"
                @click="
                  selected_categoryes.push(select);
                  sel_idx += 1;
                "
              >
                <div class="row">
                  <div class="name"></div>
                  <div class="value">{{ select }}</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="grid"
            v-if="!show_categoryes || path.length == selected_categoryes.length"
          >
            <label v-if="paginatedData.length == 0" class="text">
              Ничего не найдено
            </label>
            <div class="card" v-for="row in paginatedData" :key="row">
              <div class="row">
                <div class="name">{{ params[1] }} :</div>
                <div class="value">{{ row[0] }}</div>
              </div>
              <div class="rows">
                <div
                  class="row"
                  v-for="(item, idx) in row"
                  :key="item"
                  v-show="idx != 0"
                >
                  <div class="name">{{ params[idx + 1] }} :</div>
                  <div class="value">{{ item }}</div>
                </div>
              </div>
              <div class="card_footer">
                <button class="btn btn_del" @click="update_changeValue([row])">
                  Добавить к сделке
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="row" v-for="(row, idx) in rows" :key="row">
            <label>
              {{ row }}
            </label>
            <button class="btn" @click="handle_delete(row, idx)">
              <div class="icon"></div>
            </button>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
  <teleport to="body">
    <keep-alive>
      <filters-modal
        v-if="show_filters"
        @close="close_filters"
        @update_changeValue="update_changeValue"
      ></filters-modal>
    </keep-alive>
  </teleport>
</template>

<script>
import { mapGetters } from "vuex";
import SelectorVue from "@/components/SelectorVue";
import FiltersModal from "@/components/FiltersModal.vue";
export default {
  components: {
    SelectorVue,
    FiltersModal,
  },
  data() {
    return {
      path: ["Поступление", "№ партии", "НДС включен в цену"],
      selected_categoryes: [],
      sel_idx: 0,
      show_categoryes: true,
      categoryes: {},
      short_data: [],
      cat_for_short_dat: ["Название", "Артикул", "№ партии"],
      rows: [],
      show_cards: false,
      show_filters: false,
    };
  },
  computed: {
    ...mapGetters(["data", "params"]),
    paginatedData() {
      if (this.show_categoryes) {
        let dat = [];
        dat = dat.concat(this.data);
        let result = [];
        dat.forEach((val) => {
          let a = true;
          this.path.forEach((title, i) => {
            const title_idx = this.params.indexOf(title) - 1;
            a = val[title_idx] == this.selected_categoryes[i] && a;
          });
          if (a) result.push(val);
        });
        return result;
      } else {
        return this.data;
      }
    },
  },
  mounted() {
    this.get_data_categoryes();
    this.get_short_data(this.data);
  },
  watch: {
    show_cards() {
      if (!this.show_cards) {
        this.selected_categoryes = [];
        this.sel_idx = 0;
      }
    },
  },
  methods: {
    handle_delete(row, idx) {
      this.short_data.push({ name: row, value: Math.random() });
      this.rows.splice(idx, 1);
    },
    update_changeValue(arr) {
      arr.forEach((val) => {
        this.get_short_data([val]);
        const name = this.short_data[this.short_data.length - 1].name;
        if (!this.rows.includes(name)) {
          this.rows.push(name);
        }
        this.short_data.pop();
      });
    },
    close_filters() {
      this.show_filters = false;
    },
    select(value) {
      this.short_data.forEach((val, idx) => {
        if (val.name == value.name) this.short_data.splice(idx, 1);
      });
      this.rows.push(value.name);
    },
    get_data_categoryes() {
      this.categoryes = {};
      function unique(arr) {
        let res = [];

        for (let str of arr) {
          if (!res.includes(str)) {
            res.push(str);
          }
        }
        return res;
      }
      const result = {};
      let titles = [];
      titles = titles.concat(this.params);
      titles.pop();
      titles.shift();
      titles.forEach((title, idx) => {
        result[title] = [];
        let arr = [];
        this.data.forEach((val) => {
          arr.push(val[idx]);
        });
        result[title] = unique(arr);
      });
      Object.assign(this.categoryes, result);
    },
    get_short_data(arr) {
      // this.short_data = [];
      arr.forEach((val, index) => {
        const search_idx = (val) => {
          return this.params.indexOf(val) - 1;
        };
        let str = "";
        this.cat_for_short_dat.forEach((value, idx) => {
          idx == 0
            ? (str = str + val[search_idx(value)] + " (")
            : (str = str + value + ": " + val[search_idx(value)] + " ");
        });
        str = str + ")";
        const dat = {
          name: str,
          value: index,
        };
        this.short_data.push(dat);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
.app {
  height: 100vh;
  .container {
    overflow-y: hidden;
    min-width: 340px;
    max-width: 50%;
    width: 34%;
    height: 100%;
    padding: 20px;
    margin-left: 65px;
    border: 1px solid #ddd;
    .header {
      margin-bottom: 30px;
    }
    .content {
      .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .v-select {
          width: calc(80% - 26px);
        }
        .v-select:deep(.title) {
          p {
            overflow-x: hidden;
            white-space: nowrap;
            max-height: 34px;
          }
          .arrow {
            margin-left: 10px;
          }
        }
        .btns {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
          .checkbox {
            position: absolute;
            z-index: -1;
            opacity: 0;
          }
          .checkbox + label {
            display: inline-flex;
            align-items: center;
            user-select: none;
          }
          .checkbox + label::before {
            content: "";
            display: inline-block;
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            flex-grow: 0;
            border-radius: 0.25em;
            margin-left: 17px;
            @include bg_image("@/assets/arrow.svg", 100%);
            cursor: pointer;
            transition: background-image 0.15s ease-out,
              transform 0.15s ease-out;
          }
          .checkbox:checked + label::before {
            @include bg_image("@/assets/arrow.svg", 100%);
            transform: rotateX(180deg);
            background-position: center 6px;
          }
          .checkbox:not(:checked) + label:hover::before {
            background-size: 110%;
          }
          .checkbox:checked + label:hover::before {
            background-size: 110%;
          }
          .btn {
            cursor: pointer;
            width: 32px;
            height: 32px;
            color: #fff;
            background: #018361;
            border-radius: 8px;
            padding: 0;
            .icon {
              width: inherit;
              height: inherit;
              margin: 1px 0 0 1px;
              @include bg_image("@/assets/plus.svg", 60% 60%);
            }
          }
          .btn:hover,
          .btn:focus-visible {
            background-color: #099570;
            box-shadow: 0 0 5px 2px rgb(9 149 112 / 25%);
          }
          .btn:active {
            background-color: #018361;
            box-shadow: 0 0 5px 2px rgb(1 131 97 / 25%);
            height: 31px;
            width: 31px;
            .icon {
              background-size: 55% 55%;
            }
          }
        }
      }
      .bottom {
        margin-top: 30px;
        .links {
          display: flex;
          flex-direction: row;
          a {
            @include font(400, 16px);
          }
          a:hover {
            text-decoration: none;
            opacity: 0.8;
          }
        }
        > .row {
          width: calc(100% - 30px);
          background-color: #9bb7e74a;
          padding: 15px;
          margin-bottom: 5px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .btn {
            background: transparent;
            height: 17px;
            width: 17px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
            margin: 0;
            padding: 0;
            // margin-right: -10px;
            .icon {
              width: inherit;
              height: inherit;
              transition: background-size 0.15s ease-in-out;
              @include bg_image("@/assets/cross_black.svg", 90%);
            }
          }
          .btn:hover {
            .icon {
              background-size: 100%;
            }
          }
        }
        .grid {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 30px;
          @include font(400, 14px);
          .text {
            margin: 0 auto;
            @include font(500, 18px);
          }
          .card {
            min-width: 178px;
            width: calc(50% - 58px);
            border: 1px solid #c9c9c9;
            border-radius: 5px;
            padding: 20px;
            .rows::-webkit-scrollbar {
              display: none;
            }
            .rows {
              max-height: 220px;
              overflow: auto;
            }
            .row {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              border-bottom: 1px dotted #c9c9c9;
              padding-top: 5px;
              .name {
                max-width: 50%;
              }
              .value {
                text-align: end;
              }
              .value:first-child {
                display: none;
              }
            }
            .row:first-child {
              justify-content: center;
              @include font(500, 18px);
              padding: 20px 0;
              .name {
                display: none;
              }
            }
          }
        }
        .card_footer {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-end;
          margin-top: 10px;
          .btn_del {
            color: #fff;
            background-color: #a2a9ae;
          }
          .btn_del:hover {
            background-color: #929aa0;
            box-shadow: 0 0 5px 2px rgb(146 154 160 / 25%);
          }
        }
      }
    }
  }
}
.disable {
  pointer-events: none;
}
</style>
