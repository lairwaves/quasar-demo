<template>
  <q-page class="bg-gray-100 flex flex-col gap-2">
    <template v-for="item in posts" :key="item.id">
      <div class="bg-white p-5">
        <div class="text-[16px] font-semibold mb-2">{{ item.title }}</div>
        <template v-if="item.images.length === 1">
          <div class="flex flex-row items-start w-full">
            <div class="flex-1 flex flex-col gap-2">
              <div class="flex flex-row items-center">
                <q-avatar size="16px" class="mr-1">
                  <img :src="item.authorAvatar" />
                </q-avatar>
                <div class="mr-2">{{ item.authorName }}</div>
                <div class="text-gray-400 text-xs">{{ item.createAt }}</div>
              </div>
              <div class="truncate-text-2">
                {{ item.description }}
              </div>
            </div>
            <div>
              <q-img :src="item.images[0]" class="h-20 max-w-[150x] min-w-[120px] w-full rounded" />
            </div>
          </div>
        </template>
        <template v-else>
          <div class="flex flex-col items-start w-full">
            <div class="flex-1 flex flex-col gap-2 mb-2">
              <div class="flex flex-row items-center">
                <q-avatar size="16px" class="mr-1">
                  <img :src="item.authorAvatar" />
                </q-avatar>
                <div class="mr-2">{{ item.authorName }}</div>
                <div class="text-gray-400 text-xs">{{ item.createAt }}</div>
              </div>
              <div class="truncate-text-1">
                {{ item.description }}
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between">
            <div v-for="image in item.images" :key="image" class="w-[30%]">
              <q-img :src="image" class="h-20 max-w-[150px] min-w-[90px] col-span-1 rounded" />
            </div>
          </div>
        </template>
        <div class="flex gap-1 pt-4">
          <template v-for="tag in item.tags" :key="tag">
            <q-badge :color="tag.color"> {{ tag.name }} </q-badge>
          </template>
          <div class="flex flex-row text-gray-400 gap-2">
            <div>點贊 {{ item.likes }}</div>
            <div>收藏 {{ item.saved }}</div>
            <div>評論 {{ item.comments }}</div>
            <div>觀看 {{ item.watched }}</div>
          </div>
        </div>
      </div>
    </template>
  </q-page>
</template>
<script setup lang="ts">
const posts = [
  {
    id: 1,
    title: '我好像為什麼事情很悲哀，我想起“生命”',
    images: ['https://picsum.photos/500/300?t=2'],
    authorAvatar: 'https://cdn.quasar.dev/img/avatar.png',
    authorName: '張杰攻',
    createAt: '2021.09.12',
    description:
      '有什麼人，有什麼人有什麼人有什麼人，有什麼人有什麼人有什麼人有什麼人，有什麼人有什麼人有什麼人有什麼人',
    tags: [
      { name: '英文', color: 'blue' },
      { name: '故事', color: 'green' },
      { name: '精選優質', color: 'orange' }
    ],
    likes: 231,
    saved: 34,
    comments: 34,
    watched: 786
  },
  {
    id: 2,
    title: '我好像為什麼事情很悲哀，我想起“生命”',
    images: [
      'https://picsum.photos/500/300?t=1',
      'https://picsum.photos/500/300?t=4',
      'https://picsum.photos/500/300?t=5'
    ],
    authorAvatar: 'https://cdn.quasar.dev/img/avatar.png',
    authorName: '張杰攻',
    createAt: '2021.09.12',
    description:
      '有什麼人，有什麼人有什麼人有什麼人，有什麼人有什麼人有什麼人有什麼人，有什麼人有什麼人有什麼人有什麼人',
    tags: [
      { name: '日文', color: 'blue' },
      { name: '文章', color: 'green' }
    ],
    likes: 231,
    saved: 34,
    comments: 34,
    watched: 786
  }
]
</script>

<style scoped>
.truncate-text-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.truncate-text-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
