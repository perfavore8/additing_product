<template>
  <div class="wrapper">
    <label v-if="paginatedData.length == 0" class="text">
      Ничего не найдено
    </label>
    <table
      class="table"
      :key="updateKey"
      :class="{ blur: show_edit_modal }"
      v-if="paginatedData.length != 0"
    >
      <thead>
        <tr class="bar_row">
          <th
            class="bar_item item"
            v-show="
              collval[idx - 1] === false
                ? false
                : true && idx != params.length - 1
            "
            :style="{
              minWidth:
                idx === 0
                  ? 17 + 'px'
                  : idx === params.length - 1
                  ? 20 + 'px'
                  : width[idx] != 0
                  ? width[idx] + 'px'
                  : (collsCount >= 8 ? 100 : collsCount > 3 ? 90 : 80) /
                      collsCount +
                    '%',
            }"
            v-for="(param, idx) in params"
            :key="param"
          >
            <div class="bar_item_group">
              <div>{{ param }}</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <transition-group name="rows">
          <tr
            class="row"
            v-for="(row, i) in paginatedData"
            :key="row"
            v-show="!showduplicate[i + idxes[page - 1][0]]"
          >
            <td class="item">
              <input
                type="checkbox"
                class="checkbox"
                :id="i + 'a'"
                v-model="changeValue[data.indexOf(row)]"
              />
              <label :for="i + 'a'"></label>
            </td>
            <td
              :class="{ open_dublitem: duplicate[i + idxes[page - 1][0]] }"
              class="item"
              v-for="(item, idx) in Object.entries(row)"
              v-show="collval[idx] === false ? false : true"
              :key="item"
            >
              <div class="dublitem">
                {{ item[1] }}
                <button
                  v-if="
                    idx == params.indexOf('Название') - 1 &&
                    showduplicate[i + idxes[page - 1][0] + 1] &&
                    !duplicate[i + idxes[page - 1][0]]
                  "
                  @click="showduble(i + idxes[page - 1][0])"
                  class="buttonDuwn btn"
                ></button>
                <button
                  v-if="
                    idx == params.indexOf('Название') - 1 &&
                    !showduplicate[i + idxes[page - 1][0] + 1] &&
                    !duplicate[i + idxes[page - 1][0]] &&
                    duplicate[i + idxes[page - 1][0] + 1]
                  "
                  @click="hideduble(i + idxes[page - 1][0])"
                  class="buttonUp btn"
                ></button>
              </div>
            </td>
          </tr>
        </transition-group>
      </tbody>
    </table>
    <div
      class="bottom"
      :class="{ blur: show_edit_modal }"
      v-if="paginatedData.length != 0"
    >
      <button v-if="page > 1" @click="page -= 1">
        {{ "<" }}
      </button>
      <span style="margin: 5px">{{ page }}</span>
      <button
        v-if="page * count < data.length - countHideRows"
        @click="page += 1"
      >
        {{ ">" }}
      </button>
      <select name="count" id="count" class="count" v-model="count">
        <option>3</option>
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Main_grid",
  components: {},
  props: {
    data: {
      type: Array,
      required: true,
    },
    collval: {
      type: Array,
      required: true,
    },
  },
  emits: {
    update_changeValue: null,
  },
  data() {
    return {
      count: 20,
      page: 1,
      filtersValue: [],
      updateKey: 0,
      changeValue: [],
      duplicate: [],
      showduplicate: [],
      startIdx: 0,
      idxes: [[0, 6]],
    };
  },
  watch: {
    count() {
      this.startIdx = 0;
      this.feelIdxes();
      this.page = 1;
    },
    paginatedData: {
      handler: function () {
        this.updateKey += 1;
        this.changeValue = [];
      },
      deep: true,
    },
    changeValue: {
      handler: function () {
        this.$emit("update_changeValue", this.changeValue);
      },
      deep: true,
    },
    data: {
      handler: function () {
        // if (this.edit_idx != null) this.page = 1;
        this.calcDuplicate();
      },
      deep: true,
    },
    countHideRows: function () {
      this.feelIdxes();
    },
  },
  computed: {
    paginatedData() {
      if (this.idxes[this.page - 1] != undefined) {
        const dat = this.data.slice(
          this.idxes[this.page - 1][0],
          this.idxes[this.page - 1][1]
        );
        return dat;
      } else {
        return [];
      }
    },
    collsCount() {
      let count = 0;
      this.collval.forEach((val) => (val ? (count += 1) : null));
      return count;
    },
    countPage() {
      return this.count * (this.page - 1);
    },
    countHideRows() {
      let a = 0;
      this.duplicate.forEach((val) => (val ? (a += 1) : null));
      return a;
    },
    endidx() {
      return this.endId(this.startIdx);
    },
    width() {
      let arr = [];
      this.params.forEach((value) => {
        let a = 0;
        this.fields.forEach((val) => {
          if (value === val.field) {
            if (val.type.value == 9) a = 70;
            if (val.type.value == 7 || val.type.value == 8) a = 130;
          }
        });
        arr.push(a);
      });
      return arr;
    },
    ...mapGetters(["fields"]),
    ...mapGetters(["data1"]),
    ...mapGetters(["params"]),
  },
  mounted() {
    this.calcDuplicate();
    this.feelIdxes();
    // this.open_edit_modal(this.data[0], 0);
  },
  methods: {
    calcDuplicate() {
      let name = "";
      let artic = "";
      this.duplicate = [];
      this.showduplicate = [];
      const name_idx = this.params.indexOf("Название") - 1;
      const artic_idx = this.params.indexOf("Артикул") - 1;
      this.data.forEach((val) => {
        if (val[name_idx] == name && val[artic_idx] == artic) {
          this.duplicate.push(true);
        } else {
          this.duplicate.push(false);
        }
        name = val[name_idx];
        artic = val[artic_idx];
      });
      this.duplicate.forEach((val) => this.showduplicate.push(val));
    },
    showduble(idx) {
      while (this.duplicate[idx + 1]) {
        this.showduplicate[idx + 1] = false;
        idx += 1;
      }
    },
    hideduble(idx) {
      while (this.duplicate[idx + 1]) {
        this.showduplicate[idx + 1] = true;
        idx += 1;
      }
    },
    endId(idx) {
      let a = 0;
      while (a != this.count) {
        if (!this.duplicate[idx]) a += 1;
        idx += 1;
      }
      while (this.duplicate[idx]) idx += 1;
      return idx;
    },
    feelIdxes() {
      this.idxes = [];
      while (this.startIdx < this.data.length) {
        this.idxes.push([this.startIdx, this.endId(this.startIdx)]);
        this.startIdx = this.endId(this.startIdx);
      }
      this.startIdx = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
.item {
  padding: 10px;
  padding-left: 15px;
  border: 1px solid #c9c9c9;
  @include font(400, 14px, 17px);
  color: #3f3f3f;
  text-align: start;
  min-width: 50px;
}
.row {
}
.table {
  border-collapse: collapse;
  margin: 0 auto;
}
.bar_row {
  height: 66px;
}
.bar_item {
  background: #e5e5e5;
  @include font(500, 16px, 19px);
  color: #000000;
  vertical-align: middle;
  cursor: pointer;
}
.bar_item_group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
.count {
  margin-top: 20px;
  margin-left: 5px;
  margin-bottom: 150px;
  height: 26px;
  width: 100px;
}
.item:first-child {
  width: 17px !important;
  text-align: center;
}
.bar_item:first-child {
  width: 17px !important;
}
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
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  cursor: pointer;
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}
.checkbox:checked + label::before {
  border-color: #757575;
  background-color: #757575;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
.checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #75757591;
}
.checkbox:not(:disabled):active + label::before {
  background-color: #75757591;
  border-color: #75757591;
}
.bottom {
  button {
    @include font(400, 16px, 19px);
    color: #3f3f3f;
  }
  span {
    @include font(400, 16px, 19px);
    color: #3f3f3f;
  }
  input {
    @include font(400, 16px, 19px);
    color: #3f3f3f;
  }
}
.dublitem {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .btn {
    margin-top: -1px;
    width: 25px;
    height: 25px;
    border: none;
    outline: none;
    background-color: transparent;
  }
  .buttonDuwn {
    @include bg_image("@/assets/arrow.svg", 100% 60%);
  }
  .buttonUp {
    @include bg_image("@/assets/arrow.svg", 100% 60%);
    transform: rotate(180deg);
  }
}
.open_dublitem {
  background-color: rgba(187, 224, 242, 0.267);
  // padding-left: 30px;
  .dublitem {
  }
}
.blur {
  filter: blur(5px);
}
.text {
  margin: 0 auto;
  @include font(500, 18px);
}
.mdl-enter-active,
.mdl-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.mdl-enter-from,
.mdl-leave-to {
  opacity: 0;
}
.rows-enter-active,
.rows-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.rows-enter-from,
.rows-leave-to {
  opacity: 0;
}
</style>
