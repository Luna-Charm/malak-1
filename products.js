// ---------- Luna Charm — shared product data & cart ----------
const PAY_NUMBER = "+20 11 55724740";

const products = [
  // مكياج
  {id:1, cat:"makeup", catLabel:"مكياج", name:"أحمر شفاه مطفي — وردة القاهرة", desc:"قوام مطفي كريمي يدوم حتى 8 ساعات دون أن يجفف الشفاه.", full:"صيغة غنية بزبدة الشيا تمنحكِ لوناً مطفياً كثيفاً يدوم طويلاً، مع إحساس مريح طوال اليوم وبدون تشقق. مثالية للإطلالات اليومية والمناسبات.", price:320, badge:"الأكثر مبيعاً", color1:"#b23a55", color2:"#8a1f3d", features:["يدوم حتى 8 ساعات","لا يجفف الشفاه","خالٍ من القسوة على الحيوان"]},
  {id:2, cat:"makeup", catLabel:"مكياج", name:"كريم أساس حريري متوسط التغطية", desc:"يوحّد لون البشرة بملمس طبيعي غير دهني.", full:"كريم أساس خفيف الوزن بتغطية قابلة للتدرج، يمتزج بسلاسة مع البشرة ليمنحها إشراقة طبيعية تدوم طوال اليوم دون انسداد المسام.", price:480, badge:"جديد", color1:"#e8c9a3", color2:"#d8ad7c", features:["تغطية متوسطة قابلة للبناء","مناسب لجميع أنواع البشرة","بملمس غير دهني"]},
  {id:3, cat:"makeup", catLabel:"مكياج", name:"باليت ظلال — ليالي النيل", desc:"12 درجة بين الذهبي والنحاسي والعنابي.", full:"باليت متكامل بقوام حريري سهل التمزيج، يجمع بين الدرجات المطفية واللامعة لإطلالات نهارية وسهرات على حد سواء.", price:390, badge:null, color1:"#a8873f", color2:"#4a0e2e", features:["12 درجة قابلة للتمزيج","تركيبة عالية الصبغة","مرآة داخلية مع فرشاة"]},
  {id:4, cat:"makeup", catLabel:"مكياج", name:"ملمّع شفاه — خوخ دافئ", desc:"لمعان زجاجي مع ترطيب يدوم طوال اليوم.", full:"ملمّع بقوام غير لزج يمنح الشفاه بريقاً زجاجياً وترطيباً فورياً بفضل زيت الجوجوبا وفيتامين E.", price:210, badge:null, color1:"#d4708a", color2:"#b23a55", features:["ترطيب فوري","لمعان زجاجي طبيعي","غير لزج"]},
  {id:5, cat:"makeup", catLabel:"مكياج", name:"كونسيلر تصحيحي فائق التغطية", desc:"يخفي الهالات والعيوب بتغطية كاملة.", full:"تركيبة كريمية بتغطية كاملة تخفي الهالات الداكنة والاحمرار دون أن تتكتل، مع تثبيت يدوم طوال اليوم.", price:230, badge:null, color1:"#e8c9a3", color2:"#c9a961", features:["تغطية كاملة","لا يتكتل في خطوط الوجه","مقاوم للماء"]},
  {id:6, cat:"makeup", catLabel:"مكياج", name:"ماسكارا تكثيف وتطويل", desc:"رموش كثيفة وطويلة من أول طبقة.", full:"فرشاة مصممة لتفصل كل رمش على حدة وتمنحه طولاً وكثافة ملحوظين، بصيغة مقاومة للتلطخ تدوم طوال اليوم.", price:195, badge:"جديد", color1:"#2a1620", color2:"#4a0e2e", features:["مقاومة للتلطخ","تكثيف وتطويل فوري","سهلة الإزالة"]},

  // أدوات تصفيف الشعر
  {id:7, cat:"hair", catLabel:"أدوات شعر", name:"مكواة شعر سيراميك احترافية", desc:"تسخين سريع وتوزيع حرارة متساوٍ لنتيجة صالون.", full:"ألواح سيراميك بتقنية أيونات تقلل التطاير وتحمي الشعر من التلف، مع تحكم دقيق في درجة الحرارة حتى 230°م.", price:650, badge:"الأكثر مبيعاً", color1:"#c9a961", color2:"#4a0e2e", features:["ألواح سيراميك أيوني","تحكم بدرجة الحرارة","تسخين خلال 30 ثانية"]},
  {id:8, cat:"hair", catLabel:"أدوات شعر", name:"مكواة تجعيد لفات ناعمة", desc:"تجعيدات طبيعية ناعمة بلمسة صالون.", full:"تصميم مخروطي يمنحكِ تجعيدات متدرجة تبدو طبيعية، مع طرف بارد للأمان أثناء الاستخدام.", price:590, badge:null, color1:"#8a1f3d", color2:"#c9a961", features:["تصميم مخروطي متدرج","طرف بارد آمن","مناسبة لجميع أطوال الشعر"]},
  {id:9, cat:"hair", catLabel:"أدوات شعر", name:"مجفف شعر أيوني قوي", desc:"تجفيف سريع مع تقليل التطاير والتجعد.", full:"موتور قوي بتقنية الأيونات السالبة يقلل التطاير ويحافظ على لمعان الشعر، مع 3 إعدادات حرارة وسرعة.", price:720, badge:"جديد", color1:"#2a1620", color2:"#c9a961", features:["تقنية أيونية مضادة للتطاير","3 إعدادات حرارة وسرعة","خفيف الوزن"]},
  {id:10, cat:"hair", catLabel:"أدوات شعر", name:"سيروم حماية حراري للشعر", desc:"يحمي الشعر من حرارة أدوات التصفيف.", full:"طبقة حماية خفيفة تُوضع قبل الكي أو التجفيف لتقليل التلف الحراري وتمنح الشعر لمعاناً حريرياً.", price:180, badge:null, color1:"#d8ad7c", color2:"#e7d4a3", features:["حماية حتى 230°م","يمنح لمعاناً حريرياً","لا يترك أثراً دهنياً"]},

  // العناية بالأظافر
  {id:11, cat:"nails", catLabel:"عناية بالأظافر", name:"طقم مانيكير احترافي (8 قطع)", desc:"كل أدوات العناية بالأظافر في طقم أنيق.", full:"طقم متكامل من الفولاذ المقاوم للصدأ يشمل مقص أظافر، مبرد، مقشر بشرة وأدوات تشذيب دقيقة، في حافظة جلدية أنيقة.", price:340, badge:null, color1:"#c9a961", color2:"#8a1f3d", features:["8 أدوات من الستانلس ستيل","حافظة جلدية للسفر","مناسب لليدين والقدمين"]},
  {id:12, cat:"nails", catLabel:"عناية بالأظافر", name:"طلاء أظافر جل — مجموعة نيلية", desc:"لمعان يدوم حتى 14 يوماً بدون تقشر.", full:"تركيبة جل بدون UV تجف بسرعة وتمنح الأظافر لمعاناً يدوم حتى أسبوعين، بدرجات مستوحاة من مياه النيل.", price:150, badge:"جديد", color1:"#4a0e2e", color2:"#c9a961", features:["يدوم حتى 14 يوماً","تجف خلال دقائق","لا يحتاج مصباح UV"]},
  {id:13, cat:"nails", catLabel:"عناية بالأظافر", name:"زيت مغذي لتقوية الأظافر", desc:"يقوي الأظافر الهشة ويغذي الجلد المحيط.", full:"مزيج من زيت الأرغان وفيتامين E يعالج تكسر الأظافر وجفاف الجلد المحيط بها مع الاستخدام المنتظم.", price:120, badge:null, color1:"#e7d4a3", color2:"#d4708a", features:["يقوي الأظافر الهشة","يغذي الجلد المحيط","يمتص بسرعة"]},

  // العناية بالبشرة
  {id:14, cat:"skin", catLabel:"عناية بالبشرة", name:"سيروم فيتامين C المضيء", desc:"يمنح البشرة توهجاً طبيعياً خلال أسبوعين.", full:"تركيز عالٍ من فيتامين C المستقر يوحد لون البشرة ويقلل من الهالات الداكنة وعلامات التعب، لإشراقة صحية يومية.", price:275, badge:"الأكثر مبيعاً", color1:"#f3d9de", color2:"#d4708a", features:["يوحد لون البشرة","مضاد أكسدة قوي","مناسب لجميع أنواع البشرة"]},
  {id:15, cat:"skin", catLabel:"عناية بالبشرة", name:"كريم مرطب ليلي مغذٍ", desc:"يرمم البشرة أثناء النوم بترطيب عميق.", full:"تركيبة غنية بالسيراميد وحمض الهيالورونيك تعمل طوال الليل على ترميم حاجز البشرة وتركها ناعمة عند الاستيقاظ.", price:310, badge:null, color1:"#e8c9a3", color2:"#f3d9de", features:["ترطيب عميق لمدة 24 ساعة","يحتوي سيراميد وهيالورونيك أسيد","خالٍ من العطور القوية"]},
];

const categories = [
  {key:"all", label:"الكل"},
  {key:"makeup", label:"مكياج"},
  {key:"hair", label:"أدوات شعر"},
  {key:"nails", label:"عناية بالأظافر"},
  {key:"skin", label:"عناية بالبشرة"},
];

// ---------- Payment methods ----------
const paymentMethods = [
  {key:"vodafone", icon:"📱", label:"فودافون كاش"},
  {key:"etisalat", icon:"📱", label:"اتصالات كاش"},
  {key:"orange", icon:"📱", label:"أورانج كاش"},
  {key:"instapay", icon:"🏦", label:"انستاباي"},
  {key:"cod", icon:"🚚", label:"عند الاستلام"},
];
const WHATSAPP_NUMBER = "201155724740"; // بدون + للاستخدام مع wa.me
let selectedMethod = null;

// ---------- Cart (persisted) ----------
function getCart(){
  try{ return JSON.parse(localStorage.getItem('lunaCart')) || []; }
  catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem('lunaCart', JSON.stringify(cart));
  renderCartUI();
}
function addToCart(id, qty){
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if(existing){ existing.qty += qty; }
  else{
    const p = products.find(p => p.id === id);
    cart.push({id:p.id, name:p.name, price:p.price, qty:qty});
  }
  saveCart(cart);
}
function removeFromCart(id){
  saveCart(getCart().filter(i => i.id !== id));
}
function changeCartQty(id, delta){
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){
    saveCart(cart.filter(i => i.id !== id));
  } else {
    saveCart(cart);
  }
}
function cartTotal(){
  return getCart().reduce((s,i) => s + i.price*i.qty, 0);
}

function renderCartUI(){
  const cart = getCart();
  const countEl = document.getElementById('cartCount');
  const itemsEl = document.getElementById('cdItems');
  const totalEl = document.getElementById('cdTotal');
  if(!countEl) return;
  const totalQty = cart.reduce((s,i) => s + i.qty, 0);
  countEl.textContent = totalQty;
  const checkoutBtn = document.getElementById('checkoutBtn');
  if(cart.length === 0){
    itemsEl.innerHTML = '<div class="cd-empty">سلتكِ فارغة حالياً — أضيفي منتجاً لتبدئي تسوّقكِ 🛍</div>';
    totalEl.textContent = '0 ج.م';
    if(checkoutBtn) checkoutBtn.disabled = true;
    return;
  }
  if(checkoutBtn) checkoutBtn.disabled = false;
  itemsEl.innerHTML = cart.map(item => `
    <div class="cd-item">
      <div>
        <div class="cd-item-name">${item.name}</div>
        <div class="cd-item-qty">
          <button class="cd-qty-btn" data-qty-minus="${item.id}">−</button>
          <span class="cd-qty-val">${item.qty}</span>
          <button class="cd-qty-btn" data-qty-plus="${item.id}">+</button>
          <button class="cd-remove" data-remove="${item.id}">إزالة</button>
        </div>
      </div>
      <div class="cd-item-price">${item.price * item.qty} ج.م</div>
    </div>
  `).join('');
  totalEl.textContent = cartTotal() + ' ج.م';
}

// ---------- Checkout modal ----------
function openCheckoutModal(){
  const cart = getCart();
  if(cart.length === 0){ return; }
  document.getElementById('checkoutStep').style.display = 'block';
  document.getElementById('successStep').style.display = 'none';
  document.getElementById('checkoutModal').classList.add('show');
  document.getElementById('overlay').classList.add('open');
  document.getElementById('cartDrawer').classList.remove('open');
}
function closeCheckoutModal(){
  document.getElementById('checkoutModal').classList.remove('show');
  if(!document.getElementById('cartDrawer').classList.contains('open')){
    document.getElementById('overlay').classList.remove('open');
  }
}
function validateCheckoutForm(){
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  document.getElementById('payNowBtn').disabled = !(name && phone && address && selectedMethod);
}

const methodLabels = Object.fromEntries(paymentMethods.map(m => [m.key, m.label]));

function initCheckoutModal(){
  const payMethodsEl = document.getElementById('payMethods');
  if(!payMethodsEl) return;
  payMethodsEl.innerHTML = paymentMethods.map(m => `
    <div class="pay-option" data-method="${m.key}"><span>${m.icon}</span><span>${m.label}</span></div>
  `).join('');

  payMethodsEl.addEventListener('click', (e) => {
    const opt = e.target.closest('.pay-option');
    if(!opt) return;
    payMethodsEl.querySelectorAll('.pay-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    selectedMethod = opt.dataset.method;
    const walletField = document.getElementById('walletField');
    if(selectedMethod === 'cod'){
      walletField.classList.remove('show');
    } else {
      walletField.classList.add('show');
      document.getElementById('walletAmount').textContent = cartTotal() + ' ج.م';
      document.getElementById('walletDisplayNumber').textContent = PAY_NUMBER;
    }
    validateCheckoutForm();
  });

  ['custName','custPhone','custAddress'].forEach(id => {
    document.getElementById(id).addEventListener('input', validateCheckoutForm);
  });

  document.getElementById('payNowBtn').addEventListener('click', () => {
    const cart = getCart();
    const total = cartTotal();
    const orderNo = '#LUNA-' + Math.floor(1000 + Math.random()*9000);
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const methodLabel = methodLabels[selectedMethod];

    document.getElementById('orderNumber').textContent = orderNo;
    document.getElementById('orderTotal').textContent = total + ' ج.م';
    document.getElementById('orderMethod').textContent = methodLabel;
    document.getElementById('checkoutStep').style.display = 'none';
    document.getElementById('successStep').style.display = 'block';

    const itemsList = cart.map(i => `- ${i.name} × ${i.qty} = ${i.price*i.qty} ج.م`).join('\n');
    const waMessage = encodeURIComponent(
`طلب جديد من متجر Luna Charm 🛍
رقم الطلب: ${orderNo}

العميلة: ${name}
موبايل العميلة: ${phone}
العنوان: ${address}

المنتجات:
${itemsList}

الإجمالي: ${total} ج.م
وسيلة الدفع: ${methodLabel}${selectedMethod !== 'cod' ? '\nحوّلت العميلة على الرقم: ' + PAY_NUMBER + ' (تأكدي من وصول التحويل قبل الشحن)' : ''}`
    );
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;
    document.getElementById('whatsappNotify').href = waLink;
    window.open(waLink, '_blank');

    saveCart([]);
  });

  document.getElementById('continueShopping').addEventListener('click', () => {
    selectedMethod = null;
    ['custName','custPhone','custAddress'].forEach(id => document.getElementById(id).value = '');
    payMethodsEl.querySelectorAll('.pay-option').forEach(o => o.classList.remove('selected'));
    document.getElementById('walletField').classList.remove('show');
    closeCheckoutModal();
  });
}

function initCartUI(){
  renderCartUI();
  const overlay = document.getElementById('overlay');
  const drawer = document.getElementById('cartDrawer');
  const openBtn = document.getElementById('cartOpenBtn');
  const closeBtn = document.getElementById('cartCloseBtn');
  function openCart(){ drawer.classList.add('open'); overlay.classList.add('open'); }
  function closeCart(){ drawer.classList.remove('open'); overlay.classList.remove('open'); }
  if(openBtn) openBtn.addEventListener('click', openCart);
  if(closeBtn) closeBtn.addEventListener('click', closeCart);
  if(overlay) overlay.addEventListener('click', () => { closeCart(); closeCheckoutModal(); });
  const itemsEl = document.getElementById('cdItems');
  if(itemsEl){
    itemsEl.addEventListener('click', (e) => {
      const rm = e.target.closest('[data-remove]');
      if(rm){ removeFromCart(Number(rm.dataset.remove)); return; }
      const plus = e.target.closest('[data-qty-plus]');
      if(plus){ changeCartQty(Number(plus.dataset.qtyPlus), 1); return; }
      const minus = e.target.closest('[data-qty-minus]');
      if(minus){ changeCartQty(Number(minus.dataset.qtyMinus), -1); return; }
    });
  }
  const checkoutBtn = document.getElementById('checkoutBtn');
  if(checkoutBtn){
    checkoutBtn.addEventListener('click', openCheckoutModal);
  }
  initCheckoutModal();
  // mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      document.querySelector('header nav').classList.toggle('mobile-open');
    });
  }
}
// ---------- Theme toggle ----------
function initThemeToggle(){
  const btn = document.getElementById('themeToggle');
  if(!btn) return;
  function applyIcon(){
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '☀️' : '🌙';
  }
  applyIcon();
  btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if(isDark){
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('lunaTheme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('lunaTheme', 'dark');
    }
    applyIcon();
  });
}

// ---------- Contact form ----------
function initContactForm(){
  const submitBtn = document.getElementById('ctSubmit');
  if(!submitBtn) return;
  submitBtn.addEventListener('click', () => {
    const name = document.getElementById('ctName').value.trim();
    const email = document.getElementById('ctEmail').value.trim();
    const phone = document.getElementById('ctPhone').value.trim();
    const message = document.getElementById('ctMessage').value.trim();
    const msgEl = document.getElementById('ctMsg');
    if(!name || !phone || !message){
      msgEl.textContent = 'من فضلكِ املأي الاسم ورقم الهاتف والرسالة.';
      return;
    }
    const waText = encodeURIComponent(
`رسالة جديدة من موقع Luna Charm 💌
الاسم: ${name}
الهاتف: ${phone}
${email ? 'البريد الإلكتروني: ' + email + '\n' : ''}الرسالة: ${message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, '_blank');
    msgEl.textContent = 'شكراً لتواصلكِ! جاري تحويلكِ إلى واتساب لإرسال رسالتكِ ✨';
    ['ctName','ctEmail','ctPhone','ctMessage'].forEach(id => document.getElementById(id).value = '');
  });
}

document.addEventListener('DOMContentLoaded', initThemeToggle);
document.addEventListener('DOMContentLoaded', initContactForm);
document.addEventListener('DOMContentLoaded', initCartUI);