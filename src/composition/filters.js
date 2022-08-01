import { useParams } from "@/composition/params";
import { ref } from "vue";

export function useFilters() {
  const { params } = useParams();
  const show_filters = ref([true, true, true, true, true]);
  const add_filter = (option) => {
    show_filters.value[params.value.indexOf(option.name)] = true;
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
  const qwe = (val) => console.log(val);
  return {
    show_filters,
    add_filter,
    filtersValue,
    updateFiltersValue,
    includes,
    eqval,
    qwe,
  };
}
