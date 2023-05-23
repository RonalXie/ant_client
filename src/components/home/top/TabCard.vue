<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="4">
          <div style="position: relative;box-sizing: border-box;border-radius: 4px;overflow: hidden">
              <div>
                  <img height="85"
                       width="100%"
                       src="https://pandapro.halo.nicetheme.xyz/upload/img00046.jpg"
                       style="object-fit: cover" alt="">
              </div>
              <div class="fix_bottom mask_title" style="height: 100%;opacity: 0.3"/>
              <div class="fix_bottom bottom_title" style="height: 100%;display: flex;align-items: center;justify-content: center">
                  <router-link to=""><span style="color: #fff;font-size: large">最近更新</span></router-link>
              </div>
          </div>
      </a-col>
        <a-col :span="4">
            <div style="position: relative;box-sizing: border-box;border-radius: 4px;overflow: hidden">
                <div>
                    <img height="85"
                         width="100%"
                         src="https://pandapro.halo.nicetheme.xyz/upload/img00038.jpg"
                         style="object-fit: cover" alt="">
                </div>
                <div class="fix_bottom mask_title" style="height: 100%;opacity: 0.3"/>
                <div class="fix_bottom bottom_title" style="height: 100%;display: flex;align-items: center;justify-content: center">
                    <span style="color: #fff;font-size: large">这是标题</span>
                </div>
            </div>
        </a-col>
        <a-col :span="4">
            <div style="position: relative;box-sizing: border-box;border-radius: 4px;overflow: hidden">
                <div>
                    <img height="85"
                         width="100%"
                         src="https://pandapro.halo.nicetheme.xyz/upload/img00055.jpg"
                         style="object-fit: cover" alt="">
                </div>
                <div class="fix_bottom mask_title" style="height: 100%;opacity: 0.3"/>
                <div class="fix_bottom bottom_title" style="height: 100%;display: flex;align-items: center;justify-content: center">
                    <span style="color: #fff;font-size: large">这是标题</span>
                </div>
            </div>
        </a-col>
        <a-col :span="4">
            <div style="position: relative;box-sizing: border-box;border-radius: 4px;overflow: hidden">
                <div>
                    <img height="85"
                         width="100%"
                         src="https://pandapro.halo.nicetheme.xyz/upload/img00049.jpg"
                         style="object-fit: cover" alt="">
                </div>
                <div class="fix_bottom mask_title" style="height: 100%;opacity: 0.3"/>
                <div class="fix_bottom bottom_title" style="height: 100%;display: flex;align-items: center;justify-content: center">
                    <span style="color: #fff;font-size: large">后端开发</span>
                </div>
            </div>
        </a-col>
        <a-col :span="4">
            <div style="position: relative;box-sizing: border-box;border-radius: 4px;overflow: hidden">
                <div>
                    <img height="85"
                         width="100%"
                         src="https://pandapro.halo.nicetheme.xyz/upload/img00047.jpg"
                         style="object-fit: cover" alt="">
                </div>
                <div class="fix_bottom mask_title" style="height: 100%;opacity: 0.3"/>
                <div class="fix_bottom bottom_title" style="height: 100%;display: flex;align-items: center;justify-content: center">
                    <span style="color: #fff;font-size: large">后端开发</span>
                </div>
            </div>
        </a-col>
      <a-col :span="4">
        <div style="position: relative;box-sizing: border-box;border-radius: 4px;overflow: hidden">
          <div>
            <img height="85"
                 width="100%"
                 src="https://pandapro.halo.nicetheme.xyz/upload/img00048.jpg"
                 style="object-fit: cover" alt="">
          </div>
          <div class="fix_bottom mask_title" style="height: 100%;opacity: 0.3"/>
          <div class="fix_bottom bottom_title" style="height: 100%;display: flex;align-items: center;justify-content: center">
            <span style="color: #fff;font-size: large">后端开发</span>
          </div>
        </div>
      </a-col>

    </a-row>
  </div>

</template>

<script>
export default {
  name: "TabCard"
}
</script>

<style scoped>
.btn_my{
  background-color: #ffe08a;
}
</style>
