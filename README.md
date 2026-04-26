# Auralya Jewelry

React + Vite ile geliştirilmiş premium Türkçe mücevher/kuyumcu demo sitesi.

## 🎯 Özellikler

- ✨ Ana sayfa (12 bölüm)
- 💍 Koleksiyonlar sayfası (12 ürün)
- 📖 Hakkımızda sayfası
- 📞 İletişim sayfası
- 🛍️ Ürün kartları ve detay modalı
- 💬 WhatsApp entegrasyonu
- 📱 Responsive tasarım (mobil, tablet, desktop)
- 🎨 Premium krem/beyaz/altın renk paleti
- 🌐 Türkçe dil desteği

## 🛠️ Kullanılan Teknolojiler

- **React 18.3.1** - UI framework
- **Vite 5.1.4** - Build tool
- **Tailwind CSS 3.4.1** - Styling
- **React Router DOM 6.22.0** - Routing
- **Lucide React** - Icons

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## 🚀 Build

```bash
# Production build
npm run build

# Build önizleme
npm run preview
```

## 📂 Proje Yapısı

```
jewelry-store/
├── public/
│   └── images/          # Ürün ve site görselleri
├── src/
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, Layout
│   │   ├── sections/    # Ana sayfa bölümleri
│   │   └── ui/          # ProductCard, Modal, vb.
│   ├── data/            # products.js, categories.js
│   ├── pages/           # Home, About, Collections, Contact
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## 🎨 Sayfalar

- **Ana Sayfa** - Hero, istatistikler, kategoriler, ürünler, signature koleksiyon, galeri
- **Koleksiyonlar** - Tüm ürünler, filtreleme, arama
- **Hakkımızda** - Marka hikayesi, değerler, tasarım süreci
- **İletişim** - İletişim formu, WhatsApp, SSS

## 📝 Notlar

- Bu bir frontend demo projesidir
- Backend, ödeme sistemi veya admin panel içermez
- WhatsApp numarası demo amaçlıdır
- Tüm içerik Türkçedir

## � Lisans

Bu proje demo amaçlı geliştirilmiştir.

---

**Geliştirici:** [yigitcnkzlts](https://github.com/yigitcnkzlts)
