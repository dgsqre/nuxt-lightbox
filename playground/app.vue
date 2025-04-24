<template>
  <div>
    <div class="gallery">
      <div
        v-for="(img, idx) in imgs"
        :key="idx"
        class="pic"
        @click="() => onShow(idx)"
      >
        <img :src="img.src ? img.src : img" />
      </div>
    </div>

    <vue-easy-lightbox
      :visible="visibleRef"
      :index="indexRef"
      :imgs="imgs"
      @hide="onHide"
      @on-prev="onPrev"
      @on-next="onNext"
    >
      <template #sidebar>
        Sidebar
      </template>
    </vue-easy-lightbox>
  </div>
</template>

<script setup lang="ts">
// import "../dist/runtime/styles/index.css";
const visibleRef = ref(false);
const indexRef = ref(0);
const imgs = reactive([
  "https://picsum.photos/250/300",
  "https://picsum.photos/300/400",
  "https://picsum.photos/500/700",
]);

const onPrev = (oldIndex: number, newIndex: number) => {
  console.log("when next btn click ----");
  console.log("oldIndex of imgs:", oldIndex);
  console.log("newIndex of imgs:", newIndex);
};
const onNext = (oldIndex: number, newIndex: number) => {
  console.log("when next btn click ----");
  console.log("oldIndex of imgs:", oldIndex);
  console.log("newIndex of imgs:", newIndex);

  if (newIndex === imgs.length - 1) {
    addImg();
  }
};

const onShow = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

const addImg = () => {
  imgs.push("https://picsum.photos/640/480");
};
</script>

<style>
.gallery {
  display: flex;
  margin: auto;
  justify-content: center;
  gap: 1rem;
}

.pic {
  cursor: pointer;
}

.pic > img {
  width: 20rem;
  height: 20rem;
  object-fit: cover;
}
</style>
