// 1. قاعدة بيانات الحلويات (Menu)
const MENU = [
  { id: 1, name: "هريسة محشيه", price: 140, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFT1HSFPGMke0Zp29Un-a_yrW3-_Ta5dZDrg&s", tag: "ساخن" },
  { id: 1, name: "هريسة ساده", price: 110, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVKJjqLghwjx7xTm-tGU1CoH2tMCiLHhK8g&s", tag: "ساخن" },
  { id: 1, name: "بسبوسة سبيشيال", price: 120, img: "https://media.gemini.media/img/large/2018/5/16/2018_5_16_16_3_49_892.jpg", tag: "ساخن" },
  { id: 2, name: "مشكل الغفير الملكي", price: 210, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VHoIOrTqkBLtyl1aSg20etPqPZHDLSE_YQ&s", tag: "بوكس التوفير" },
  { id: 3, name: "بقلاوة بالفستق", price: 180, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PGZMeJ4Ac26zFdXwN-UUxZkM3YAQMOJtlg&s", tag: "فخم" },
  { id: 4, name: "بلح الشام", price: 140, img: "https://kitchen.sayidaty.net/uploads/node/6377_21-06-15_balh_alsham.jpg", tag: "طازج" },
  { id: 1, name: "كنافه سيجار", price: 160, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_qOUzcdagaOzSSLt7Px4b_3oqrQpzQvfTA&s", tag: "ساده" },
  { id: 5, name: "كنافه بورليه", price: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0OjSU_jqg5LC_23hzNGgGB0aEcZsKTZllQ&s", tag: "الأكثر مبيعاً" },
  { id: 6, name: "حجازية إسكندراني", price: 150, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdmwXWlIW9oayNla-6UM3VQE92CmACAZ7DQ&s", tag: "تقليدي" }
];

// 2. وظيفة عرض المنتجات بشكل تلقائي
const displayProducts = () => {
  const list = document.getElementById('productList');
  list.innerHTML = ""; // مسح القائمة الحالية

  MENU.forEach(item => {
      list.innerHTML += `
          <div class="col-lg-4 col-md-6">
              <div class="product-card h-100 shadow-sm">
                  <div class="product-img-wrapper">
                      <span class="price-tag">${item.price} ج.م</span>
                      <img src="${item.img}" alt="${item.name}">
                      <div class="p-2 text-center" style="position:absolute; bottom:0; width:100%; background:rgba(255,193,7,0.8); font-weight:bold;">
                          ${item.tag}
                      </div>
                  </div>
                  <div class="p-4 text-center">
                      <h4 class="fw-bold mb-3">${item.name}</h4>
                      <button class="btn btn-outline-dark w-100 rounded-pill" onclick="orderNow('${item.name}')">
                          <i class="fab fa-whatsapp me-2"></i> اطلب الآن
                      </button>
                  </div>
              </div>
          </div>
      `;
  });
};

// 3. وظيفة الطلب عبر واتساب
function orderNow(productName) {
  const phone = "201283813775"; // رقم صاحب المحل
  const message = `مرحباً إبراهيم الغفير، أريد طلب: ${productName}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// 4. معالجة نموذج التواصل
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelectorAll('input')[0].value;
  const msg = this.querySelector('textarea').value;
  
  alert(`شكراً يا ${name}! تم استلام طلبك وسنتواصل معك فوراً.`);
  this.reset();
});

// تشغيل الوظائف عند التحميل
document.addEventListener('DOMContentLoaded', displayProducts);