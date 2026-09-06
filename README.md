# MANTRA — Celestial Code 24 Cards
**Web Version | GitHub Pages + QR Code**

---

## 📁 ไฟล์ที่มี

```
mantra-web/
├── index.html          ← ไฟล์หลัก (เปิดได้เลย)
├── cards-data.js       ← ข้อมูล 24 cards (backup)
├── images/
│   ├── 01_MAGNETIC.png
│   ├── 02_RECEIVE.png
│   └── ... (24 ไฟล์ทั้งหมด)
└── README.md          ← ไฟล์นี้
```

---

## 🚀 วิธีใช้ (3 วิธี)

### **วิธี 1: ใช้ทันที (ไม่ต้อง GitHub)**
1. ดาวน์โหลดไฟล์ทั้งหมด
2. เปิด `index.html` ด้วย browser
3. ใช้งานได้เลย (แต่ไม่มี URL คงที่)

---

### **วิธี 2: GitHub Pages (ดีที่สุด - ได้ URL คงที่)**

#### **ขั้นที่ 1: สร้าง GitHub Account**
1. ไปที่ https://github.com
2. กดปุ่ม "Sign up"
3. ใส่ email + password + username
4. ยืนยัน email

#### **ขั้นที่ 2: สร้าง Repository ใหม่**
1. ตอน login แล้ว ดูมุมขวาบน → กดไอคอน "+" → เลือก "New repository"
2. ใส่ชื่อ: `mantra-web` (หรือชื่ออื่นก็ได้)
3. **อย่าลืม** เลือก "Public" ✓
4. กด "Create repository"

#### **ขั้นที่ 3: Upload ไฟล์ (วิธีง่ายที่สุด)**
1. ที่หน้า repository ที่เพิ่งสร้าง มี section "Quick setup..."
2. **กดปุ่ม "uploading an existing file"** (ลิงค์สีน้ำเงิน)
3. ลากไฟล์เข้า หรือกด "choose your files":
   - `index.html` ← ด้านนอก
   - `README.md` ← ด้านนอก
   - สร้างโฟลเดอร์ `images` แล้วขึ้งภาพทั้งหมด
4. กด "Commit changes"

**วิธี Upload ภาพหลายไฟล์:**
- ถ้าอัปโหลด index.html + README.md ก่อน
- หลังจาก Commit แล้ว ให้กดปุ่ม "Add file" → "Create new file"
- ชื่อ: `images/01_MAGNETIC.png` → กด "Edit as binary" → วาง ไฟล์ PNG
- ทำซ้ำกับไฟล์อื่น ๆ

**อีกวิธี (ลากไฟล์ได้):**
- GitHub ให้ลากโฟลเดอร์ `images/` ลงไปได้เลย

#### **ขั้นที่ 4: เปิด GitHub Pages**
1. ในหน้า Repository → กด **Settings** (มุมขวา)
2. ด้านซ้าย → ดูหาเมนู → เลือก **Pages**
3. ที่หัวข้อ "Source" → เลือก **"Deploy from a branch"**
4. ใต้นั้น → Branch: `main` → Folder: `/ (root)` → กด Save
5. รอ 1-2 นาที

**จะเห็นข้อความ:**
> "Your site is live at https://yourusername.github.io/mantra-web"

นี่แหละ URL สำเร็จแล้ว! 🎉

#### **ขั้นที่ 5: สร้าง QR Code**
1. ไปที่ https://qr-server.com/api/
2. เลือก "Create QR code"
3. ใส่ URL: `https://yourusername.github.io/mantra-web`
4. กด Generate
5. Download → Print → เสร็จ

---

## 🖼️ วิธีเปลี่ยนภาพ

### **วิธี 1: แทนที่ภาพเดิม (ง่ายสุด)**
1. ของภาพใหม่ของคุณมี **ชื่อเดียวกันพอดี** เช่น `01_MAGNETIC.png`
2. ไปที่ Repository → โฟลเดอร์ `images`
3. กดไฟล์ `01_MAGNETIC.png` → กด "..." → "Delete" → Commit
4. ลากภาพใหม่ลงไป (ด้วยชื่อเดียวกัน) → Commit
5. รอ 30 วิเลยให้ update

### **วิธี 2: แก้ไข index.html (ถ้าชื่อไฟล์ต่างกัน)**
1. Repository → `index.html`
2. กดไอคอน ✏️ (Edit)
3. หาส่วน `"image": "01_MAGNETIC.png"` → เปลี่ยนเป็นชื่อใหม่
4. ล้องขึ้น Commit changes

---

## 🔧 ปรับแต่งหน้าเว็บ

### **เปลี่ยนสี (ฟอนต์หลัก)**
1. เปิด `index.html` ด้วย Text Editor (เช่น Notepad)
2. หาส่วน `<style>` ที่อยู่บน ๆ
3. ดูหา `:root { --primary: #7f77dd;` 
4. `#7f77dd` = สี (purple) → เปลี่ยนเป็นรหัสสี 6 หลัก เช่น:
   - `#FF1493` = ชมพู
   - `#1E90FF` = น้ำเงิน
   - `#32CD32` = เขียว
5. บันทึก → Upload index.html ขึ้น GitHub

### **เปลี่ยนชื่อเว็บ**
1. `index.html` ที่ว่า `<title>MANTRA — Celestial Code 24 Cards</title>`
2. เปลี่ยนไปเป็นชื่อของคุณ
3. บันทึก → Upload

---

## 📱 Test บน Mobile

1. เปิด QR Code ด้วยกล้องโทรศัพท์
2. ควรไป https://yourusername.github.io/mantra-web แล้ว
3. ลองกดปุ่มทั้งหมด: Draw Next, Share, Save

---

## ❓ ปัญหา & วิธีแก้

### **"Images not showing"**
- ✓ ตรวจสอบว่า โฟลเดอร์ `images/` ได้สร้างหรือยัง
- ✓ ชื่อไฟล์ต้องตรง `01_MAGNETIC.png` พอดี (อักษรใหญ่เล็ก สำคัญ!)
- ✓ รอ 1-2 นาที browser cache

### **"Page not loading"**
- ✓ ตรวจสอบ Settings → Pages → Source ว่าเป็น `main` branch รึ เปล่า
- ✓ ตรวจสอบว่า index.html อยู่ root (/mantra-web/index.html ✓ vs /mantra-web/src/index.html ✗)

### **"GitHub not showing URL"**
- ✓ รอ 2-5 นาที บาง repo ช้า
- ✓ ลอง refresh หน้า Settings → Pages

---

## 🎯 Use Cases

- ✓ **Share ลิงก์:** ส่ง URL ให้เพื่อน
- ✓ **QR Code Print:** วาง QR ในบริหารเหลี่ยม/กล่องบริการ
- ✓ **Social Media:** Post Instagram link + QR
- ✓ **Event:** ทำเป็น interactive booth (Print QR + ล้ว QR → ได้ card)

---

## 📝 Tips

- **Backup:** GitHub เก็บ version history → อัน back ได้
- **Free Forever:** GitHub Pages เป็น free ตลอด ไม่มีการ charge
- **SSL Included:** HTTPS อัตโนมัติ เปลี่ยนไป https:// ได้เลย
- **Custom Domain:** (ขั้นสูง) สามารถใช้ domain ของตัวเอง ได้

---

## 📞 Support

1. GitHub ให้ Documentation ดี: https://docs.github.com/en/pages
2. QR Code Generator: https://qr-server.com
3. ถ้าติดขัด ลอง search "GitHub Pages [ปัญหา]" ก็มีคำตอบเต็ม ๆ

---

**Ready? ไปเริ่มได้เลย! 🚀**
