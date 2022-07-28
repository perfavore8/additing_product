<template>
  <div class="app_modal">
    <div class="container">
      <div class="header">Filters Modal</div>
      <div class="content">
        <keep-alive>
          <filter-list />
        </keep-alive>
      </div>
      <div class="footer">
        <div class="btns">
          <button class="btn btn1" @click="close()">Назад</button>
          <button class="btn btn2" @click="accept()">Применить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterList from "@/components/FiltersList.vue";
export default {
  components: {
    FilterList,
  },
  emits: {
    close: null,
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    const accept = () => {
      close();
    };
    return { close, accept };
  },
};
</script>

<style lang="scss" scoped>
@import "@/app.scss";
.app_modal {
  pointer-events: all;
  z-index: 9999999;
  width: calc(66% - 115px);
  position: absolute;
  top: 0;
  left: calc(34% + 115px);
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
      justify-content: start;
      padding: 10px 50px;
      @include font(500, 20px);
      border-bottom: 2px solid #dee2e6;
    }
    .content {
      @include font(400, 16px);
      padding: 15px 50px;
      border-bottom: 2px solid #dee2e6;
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
