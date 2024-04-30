<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { bannerUrl } from "../assets/kxnbannerUrl"


const imgMessage = () => {
  ElMessage({
    message: '图片数量已超过 12 张',
    type: 'error',
    duration: 6000
  })
}

const loading = ElLoading.service({
  text: '正在加载中'
})

let canvas = document.createElement('canvas')

let drawCanvas = canvas.getContext('2d')

const imgBanner = document.createElement('img')
imgBanner.width = 2032
imgBanner.height = 180
imgBanner.src = bannerUrl

onBeforeMount(() => {
  setTimeout(() => {
    loading
  }, 1000)
  importFont('phb').load().then(() => {
    loading.close()
  })
})

const importFont = (name: string) => {
  const Urlsyh = new URL(`../assets/fonts/${name}.ttf`, import.meta.url).href
  const myFont = new FontFace(name, 'url(' + `${Urlsyh}` + ')')
  document.fonts.add(myFont)
  return myFont
}


const doChange = (files: any) => {
  let filesLength = files.length
  if (filesLength! >= 13) {
    imgMessage()
    fileInput.value = ''
    return
  }

  let nd = new Date()
  let getdate = String(nd.getMonth() + 1) + String(nd.getDate()) + String(nd.getHours()) + String(nd.getMinutes()) + String(nd.getSeconds())

  let secondaryHeight = 0
  if (secondaryInput.value) {
    secondaryHeight = 88
  }

  canvas.width = 2032
  canvas.height = 380 + Math.ceil(filesLength / 3) * 800 + secondaryHeight
  drawCanvas!.fillStyle = "#fff"
  drawCanvas!.fillRect(0, 0, canvas.width, canvas.height)

  drawCanvas!.drawImage(imgBanner, 0, 0, 2032, 180)

  drawCanvas!.fillStyle = "#000"
  drawCanvas!.font = '88px phb'
  drawCanvas!.textAlign = "center"
  drawCanvas!.textBaseline = "top"
  drawCanvas!.fillText(mainInput.value || "睡衣新品热卖", 1016, 220)
  drawCanvas!.font = '88px phb'
  drawCanvas!.fillText(secondaryInput.value || "", 1016, 320)
  drawCanvas!.font = '64px phb'

  let imgs: any = []
  setImg(0, imgs, files, filesLength, secondaryHeight, getdate)

}

const setImg = (i: any, imgs: any, files: any, filesLength: any, secondaryHeight: any, getdate: any) => {
  imgs[i] = new Image()
  imgs[i].src = URL.createObjectURL(files[i])
  imgs[i].onload = () => {
    drawCanvas?.drawImage(imgs[i], 35 + (i % 3) * 658, 380 + Math.floor(i / 3) * 800 + secondaryHeight, 646, 646)
    drawCanvas!.fillText(files[i].name.split(".")[0].split("_")[0].split("[")[0], 35 + (i % 3) * 658 + 329, 380 + Math.floor(i / 3) * 800 + 670 + secondaryHeight)
    i = i + 1
    if (i < filesLength) {
      setImg(i, imgs, files, filesLength, secondaryHeight, getdate)
    } else {
      let imgdata = canvas.toDataURL('image/jpeg', 0.96)
      let da = document.createElement('a')
      da.download = mainInput.value || "睡衣新品热卖" + "_" + getdate + '.jpg'
      da.href = imgdata
      document.body.appendChild(da)
      da.click()
      da.remove()
      fileInput.value = ''
    }
  }
}






const fileInput = document.createElement('input')
fileInput.type = 'file'
fileInput.multiple = true
fileInput.onchange = () => {
  doChange(fileInput.files)
}



const mainInput = ref()
const secondaryInput = ref()

</script>

<template>
  <div class="getimagediv">
    <el-space fill wrap :size="8" :fill-ratio="100" direction=vertical style="width: 100%;">
      <el-input v-model="mainInput" placeholder="睡衣新品热卖" clearable size="large" maxlength="15" show-word-limit><template
          #prepend>主标题</template></el-input>

      <el-input v-model="secondaryInput" paceholder="" clearable size="large" maxlength="25" show-word-limit><template
          #prepend>副标题</template></el-input>

      <el-button v-loading type="primary" size="large" @click='fileInput.click()'>
        上传图片
      </el-button>
    </el-space>
  </div>
</template>

<style scoped>
.getimagediv {
  margin: auto;
  margin-top: 120px;
  width: 320px;
  text-align: left;
}

.el-button {
  --el-color-primary: #00d4db;
  --el-color-primary-light-3: #00e3eb;
}

:deep(.el-input-group__prepend) {
  padding: 0 10px;
}
</style>