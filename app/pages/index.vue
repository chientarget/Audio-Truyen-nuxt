<template>
  <div>
    <!-- Header -->
    <header>
      <nav class="bg-[#242235] py-4">
        <div class="container mx-auto flex justify-between items-center">
          <NuxtLink to="/">
            <img src="/../public/logo.png" alt="Logo" class="h-8">
          </NuxtLink>
          <div class="hidden md:flex items-center">
            <NuxtLink to="/tim-kiem" class="text-gray-300 hover:text-white px-4">Tìm kiếm</NuxtLink>
          </div>
          <button @click="isOpen =!isOpen" class="md:hidden text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Sidebar và Content -->
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div :class="{'block': isOpen, 'hidden':!isOpen}" class="fixed top-0 left-0 bottom-0 w-64 bg-[#242235] py-4">
        <ul>
          <li class="py-2 px-4 text-gray-300 hover:text-white">Trang chủ</li>
          <li class="py-2 px-4 text-gray-300 hover:text-white">Danh mục</li>
          <!-- Thêm mục khác -->
        </ul>
      </div>

      <!-- Content -->
      <div class="ml-64 p-4 w-full h-full overflow-y-auto">
        <!-- Banner -->
        <div class="bg-cover bg-center h-48 mb-4" style="background-image: url('https://example.com/banner-truyen-tien-hiep.jpg')">
          <div class="container mx-auto p-4 pt-6 text-center">
            <h1 class="text-4xl font-bold text-[#b769e6]">Thế Giới Truyện Tiên Hiệp</h1>
            <p class="text-xl text-gray-400">Khám phá thế giới truyện tiên hiệp đầy màu sắc</p>
          </div>
        </div>

        <!-- Main Content -->
        <div class="container mx-auto">
          <!-- Truyện Đề Cử -->
          <div class="bg-[#1a1625] py-4 mb-8">
            <h2 class="text-2xl font-bold text-[#b769e6] px-4 mb-4">Truyện Đề Cử</h2>
            <div class="grid grid-cols-3 gap-4 px-4">
              <div v-for="(truyen, index) in truyenDeCu" :key="index" class="bg-[#242235] p-4 rounded-2xl shadow-xl">
                <img :src="truyen.anhBia" alt="Ảnh bìa truyện" class="w-full h-48 object-cover mb-4">
                <h3 class="text-xl font-bold text-white">{{ truyen.tenTruyen }}</h3>
                <p class="text-gray-400">{{ truyen.tacGia }}</p>
                <ul class="mt-4">
                  <li v-for="(chuong, index) in truyen.chuong" :key="index" class="py-1 text-gray-300 hover:text-white">{{ chuong.tenChuong }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Top Truyện và Truyện Đề Xuất -->
          <div class="flex justify-between mb-8">
            <!-- Top Truyện -->
            <div class="bg-[#1a1625] py-4 w-1/2 mr-4">
              <h2 class="text-2xl font-bold text-[#b769e6] px-4 mb-4">Top Truyện</h2>
              <div class="grid grid-cols-2 gap-4 px-4">
                <div v-for="(truyen, index) in topTruyen" :key="index" class="bg-[#242235] p-4 rounded-2xl shadow-xl">
                  <img :src="truyen.anhBia" alt="Ảnh bìa truyện" class="w-full h-48 object-cover mb-4">
                  <h3 class="text-xl font-bold text-white">{{ truyen.tenTruyen }}</h3>
                </div>
              </div>
            </div>

            <!-- Truyện Đề Xuất -->
            <div class="bg-[#1a1625] py-4 w-1/2">
              <h2 class="text-2xl font-bold text-[#b769e6] px-4 mb-4">Truyện Đề Xuất</h2>
              <div class="grid grid-cols-2 gap-4 px-4">
                <div v-for="(truyen, index) in truyenDeXuat" :key="index" class="bg-[#242235] p-4 rounded-2xl shadow-xl">
                  <img :src="truyen.anhBia" alt="Ảnh bìa truyện" class="w-full h-48 object-cover mb-4">
                  <h3 class="text-xl font-bold text-white">{{ truyen.tenTruyen }}</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Danh mục và Truyện Mới Cập Nhật -->
          <div class="flex justify-between">
            <!-- Danh mục -->
            <div class="bg-[#1a1625] py-4 w-1/2 mr-4">
              <h2 class="text-2xl font-bold text-[#b769e6] px-4 mb-4">Danh mục</h2>
              <ul class="px-4">
                <li class="py-2 text-gray-300 hover:text-white">Tiên Hiệp</li>
                <li class="py-2 text-gray-300 hover:text-white">Kiếm Hiệp</li>
                <!-- Thêm danh mục khác -->
              </ul>
            </div>

            <!-- Truyện Mới Cập Nhật -->
            <div class="bg-[#1a1625] py-4 w-1/2">
              <h2 class="text-2xl font-bold text-[#b769e6] px-4 mb-4">Truyện Mới Cập Nhật</h2>
              <ul class="px-4">
                <li class="py-2 text-gray-300 hover:text-white">Truyện 1</li>
                <li class="py-2 text-gray-300 hover:text-white">Truyện 2</li>
                <!-- Thêm truyện mới cập nhật -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const router = useRouter();

// Check if the user is logged in when the component is mounted
onMounted(() => {
  if (!isLoggedIn()) {
    router.push('/login');
  }
});

// Dữ liệu truyện đề cử
const truyenDeCu = ref([
  {
    tenTruyen: 'Truyện 1',
    tacGia: 'Tác giả 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
    chuong: [
      {tenChuong: 'Chương 1: Khởi đầu'},
      {tenChuong: 'Chương 2: Hành trình'},
      // Thêm chương khác
    ]
  }, {
    tenTruyen: 'Truyện 1',
    tacGia: 'Tác giả 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
    chuong: [
      {tenChuong: 'Chương 1: Khởi đầu'},
      {tenChuong: 'Chương 2: Hành trình'},
      // Thêm chương khác
    ]
  }, {
    tenTruyen: 'Truyện 1',
    tacGia: 'Tác giả 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
    chuong: [
      {tenChuong: 'Chương 1: Khởi đầu'},
      {tenChuong: 'Chương 2: Hành trình'},
      // Thêm chương khác
    ]
  }, {
    tenTruyen: 'Truyện 1',
    tacGia: 'Tác giả 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
    chuong: [
      {tenChuong: 'Chương 1: Khởi đầu'},
      {tenChuong: 'Chương 2: Hành trình'},
      // Thêm chương khác
    ]
  }, {
    tenTruyen: 'Truyện 1',
    tacGia: 'Tác giả 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
    chuong: [
      {tenChuong: 'Chương 1: Khởi đầu'},
      {tenChuong: 'Chương 2: Hành trình'},
      // Thêm chương khác
    ]
  },
  // Thêm truyện đề cử khác
]);

// Dữ liệu top truyện
const topTruyen = ref([
  {
    tenTruyen: 'Truyện 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
  },
  {
    tenTruyen: 'Truyện 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
  },
  {
    tenTruyen: 'Truyện 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
  },
  {
    tenTruyen: 'Truyện 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
  },
  // Thêm top truyện khác
]);

// Dữ liệu truyện đề xuất
const truyenDeXuat = ref([
  {
    tenTruyen: 'Truyện 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
  }, {
    tenTruyen: 'Truyện 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
  }, {
    tenTruyen: 'Truyện 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
  }, {
    tenTruyen: 'Truyện 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
  }, {
    tenTruyen: 'Truyện 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
  }, {
    tenTruyen: 'Truyện 1',
    anhBia: 'https://static.cdnno.com/poster/ta-tai-loan-the-dong-thuoc-tinh-tu-tien/300.jpg?1718418533',
  },
  // Thêm truyện đề xuất khác
]);
</script>
