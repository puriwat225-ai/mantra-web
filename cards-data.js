const CARDS_DATA = [
  {
    "image": "01_MAGNETIC.png",
    "shadow": "ปิดตัวเอง / ปฏิเสธความช่วยเหลือ / เชื่อว่าต้องทำทุกอย่างคนเดียว",
    "symbol": "วงกลมเปิดด้านบน + จุดแสงตกสู่ศูนย์กลาง",
    "color": "Mystic Blush + Soft Gold",
    "affirmation": "I allow good things to reach me.",
    "ritual": "วางมือบนหน้าอก → หายใจเข้า → พูดว่า “วันนี้ฉันไม่จำเป็นต้องควบคุมทุกอย่าง”"
  },
  {
    "image": "02_RECEIVE.png",
    "shadow": "เปรียบเทียบตัวเอง / กลัวโดดเด่น / ลดคุณค่าตัวเองเพื่อให้เข้ากับคนอื่น",
    "symbol": "Solar Core + 8 radial rays",
    "color": "Dusty Rose + Warm Champagne",
    "affirmation": "I do not shrink to belong. I radiate.",
    "ritual": "ก่อนเริ่มงานหรือพบผู้คน เลือก 1 สิ่งที่วันนี้จะกล้าแสดงออกมากขึ้น"
  },
  {
    "image": "03_RADIATE.png",
    "shadow": "ความอยากจากการเปรียบเทียบ / ego / status",
    "symbol": "ดาว 8 แฉกชี้ขึ้น + orbital trajectory",
    "color": "Deep Mauve + Champagne Gold",
    "affirmation": "I honor what I truly desire.",
    "ritual": "เขียน 3 สิ่งที่ต้องการ → ตัดให้เหลือ 1 สิ่งที่สำคัญที่สุด"
  },
  {
    "image": "04_DESIRE.png",
    "shadow": "People-pleasing / flirting for validation / เปลี่ยนตัวเองเพื่อให้คนรัก",
    "symbol": "สองวงโคจรที่แตะกันโดยไม่ทับกัน",
    "color": "Muted Blush + Rose Gold",
    "affirmation": "My presence speaks before my words do.",
    "ritual": "ก่อนพบใคร ให้ตั้ง intention: “วันนี้ฉันจะฟังอย่างตั้งใจ”"
  },
  {
    "image": "05_CHARM.png",
    "shadow": "โรแมนติไซส์ทุกความรู้สึก / เปลี่ยนความอยากชั่วคราวให้เป็น destiny",
    "symbol": "เส้นพลังแนวตั้งจากจุดเล็ก → ดาว",
    "color": "Mauve + Deep Rose",
    "affirmation": "I listen to what keeps calling me.",
    "ritual": "ปิดหน้าจอ 5 นาที แล้วถาม “What keeps returning to my heart?”"
  },
  {
    "image": "06_CALLING.png",
    "shadow": "ฝืนตัวเองเพื่อให้ชีวิตดูถูกต้อง",
    "symbol": "Vertical Axis + concentric circles",
    "color": "Sacred Ivory + Champagne Gold",
    "affirmation": "I choose what feels true, not merely what looks right.",
    "ritual": "ถาม “สิ่งที่ฉันกำลังทำ สอดคล้องกับคนที่ฉันอยากเป็นหรือไม่?”"
  },
  {
    "image": "07_ALIGN.png",
    "shadow": "Overthinking / reactive behavior / ให้ external noise กำหนดอารมณ์",
    "symbol": "จุดกลาง + วงกลม 3 ชั้น",
    "color": "Warm Ivory + Taupe",
    "affirmation": "I return to my center.",
    "ritual": "หายใจเข้า 4 วินาที → กลั้น 2 → หายใจออก 6 วินาที × 3 รอบ"
  },
  {
    "image": "08_CENTER.png",
    "shadow": "Analysis paralysis / ต้องการ certainty 100%",
    "symbol": "วงกลมมีเส้นแสงพาดผ่านตรงกลาง",
    "color": "Ivory + Pale Gold",
    "affirmation": "I see what matters now.",
    "ritual": "เขียนปัญหาทั้งหมด → วงกลมเพียง 1 เรื่องที่ควรจัดการก่อน"
  },
  {
    "image": "09_CLARITY.png",
    "shadow": "Blind faith / passivity / รอโดยไม่ลงมือ",
    "symbol": "เส้นโคจรที่ไม่ปิดวงสมบูรณ์",
    "color": "Ivory + Soft Gold",
    "affirmation": "I trust the process while doing my part.",
    "ritual": "แบ่งกระดาษเป็น CONTROL / RELEASE แล้วเขียนสิ่งที่อยู่ในแต่ละฝั่ง"
  },
  {
    "image": "10_TRUST.png",
    "shadow": "หนีเข้าสู่ fantasy / spiritual bypassing / ไม่สนใจความจริง",
    "symbol": "Circle + horizontal horizon",
    "color": "Warm Ivory + Earth Taupe",
    "affirmation": "I am here. I am steady.",
    "ritual": "วางเท้าบนพื้น → หายใจ → รับรู้สัมผัสของร่างกาย 60 วินาที"
  },
  {
    "image": "11_GROUND.png",
    "shadow": "Distraction / rumination / future anxiety",
    "symbol": "จุดเดียวตรงกลางวงกลม",
    "color": "Sacred Ivory + Champagne Gold",
    "affirmation": "This moment is enough to begin.",
    "ritual": "ทำกิจกรรมหนึ่งอย่างโดยไม่จับโทรศัพท์ 5 นาที"
  },
  {
    "image": "12_PRESENCE.png",
    "shadow": "ยึดติดเพราะกลัวสูญเสีย",
    "symbol": "วงกลมเปิดออกทางด้านข้าง",
    "color": "Sacred Ivory + Champagne Gold",
    "affirmation": "I release what no longer needs to travel with me.",
    "ritual": "เขียน 1 สิ่งที่ต้องการปล่อย → ฉีกกระดาษ → ทิ้ง"
  },
  {
    "image": "13_RELEASE.png",
    "shadow": "ยอมแพ้ / avoidance / ใช้ปล่อยวางเป็นข้ออ้างไม่ลงมือ",
    "symbol": "เส้นโค้งไหลลงสู่ศูนย์กลาง",
    "color": "Dusty Mauve + Ivory",
    "affirmation": "I stop forcing what cannot be forced.",
    "ritual": "ถาม “What am I trying to control that isn't mine to control?”"
  },
  {
    "image": "14_SURRENDER.png",
    "shadow": "Perfectionism / obsession with cleansing / ต้องการเริ่มใหม่ตลอดเวลา",
    "symbol": "วงกลมถูกตัดด้วยเส้นแสงเดียว",
    "color": "Sacred Ivory + Champagne Gold",
    "affirmation": "I make space for what matters.",
    "ritual": "Clear โต๊ะ / โทรศัพท์ / workspace 10 นาที"
  },
  {
    "image": "15_CLEAR.png",
    "shadow": "Isolation / defensiveness / rigid boundary",
    "symbol": "วงกลมล้อมจุดกลาง",
    "color": "Deep Taupe + Champagne Gold",
    "affirmation": "What protects my peace deserves a place in my life.",
    "ritual": "เลือก 1 เรื่องที่ควรพูดว่า “ไม่” แล้วกำหนดขอบเขตให้ชัด"
  },
  {
    "image": "16_BOUNDARY.png",
    "shadow": "Restart addiction / หนีปัญหาโดยคิดว่าการเริ่มใหม่แก้ทุกอย่าง",
    "symbol": "วงกลมหมุนกลับสู่จุดเริ่มต้น",
    "color": "Warm Ivory + Dusty Rose",
    "affirmation": "I can begin again without becoming someone else.",
    "ritual": "เลือก routine หนึ่งอย่างแล้วเริ่มใหม่วันนี้"
  },
  {
    "image": "17_RESET.png",
    "shadow": "กลัวความว่าง → รีบเติมด้วยคน งาน ความสัมพันธ์ หรือสิ่งใหม่",
    "symbol": "วงกลมเข้มขนาดเล็กในพื้นที่ว่างกว้าง",
    "color": "Deep Taupe + Ivory",
    "affirmation": "I do not need to fill every empty space.",
    "ritual": "นั่งเงียบ ๆ 3 นาทีโดยไม่พยายามแก้ปัญหาอะไร"
  },
  {
    "image": "18_VOID.png",
    "shadow": "คิดว่าตัวเองตื่นรู้กว่าคนอื่น",
    "symbol": "ดาวกำลังปรากฏเหนือ horizon",
    "color": "Ivory + Champagne Gold",
    "affirmation": "I am willing to see differently.",
    "ritual": "ถาม “What am I seeing differently now?”"
  },
  {
    "image": "19_AWAKEN.png",
    "shadow": "ทำมากเกินไป / growth obsession / เปรียบเทียบตัวเอง",
    "symbol": "วงกลมหลายชั้นขยายออกจากศูนย์กลาง",
    "color": "Dusty Rose + Champagne Gold",
    "affirmation": "There is more possible than I can currently see.",
    "ritual": "ทำสิ่งหนึ่งที่อยู่นอก routine เดิม"
  },
  {
    "image": "20_EXPAND.png",
    "shadow": "Self-rejection / perfectionism / เกลียดตัวตนปัจจุบัน",
    "symbol": "วงกลมซ้อน 2 ชั้นที่กำลังเปลี่ยนรูป",
    "color": "Mauve + Ivory + Gold",
    "affirmation": "I am becoming by choosing, not by waiting.",
    "ritual": "ถาม “What would the next version of me do today?” แล้วทำ 1 อย่าง"
  },
  {
    "image": "21_BECOME.png",
    "shadow": "Fantasy / unrealistic expectation / future obsession",
    "symbol": "เส้นแนวตั้งพุ่งขึ้นสู่ดาว",
    "color": "Warm Ivory + Champagne Gold",
    "affirmation": "I give my future a clear direction.",
    "ritual": "เขียนภาพชีวิตที่ต้องการในอีก 12 เดือนด้วย 3 ประโยค"
  },
  {
    "image": "22_VISION.png",
    "shadow": "Toxic positivity / pressure to constantly improve",
    "symbol": "8-point star + ascending line",
    "color": "Dusty Rose → Champagne Gold",
    "affirmation": "I rise without rushing.",
    "ritual": "เลือก 1 action ที่สำคัญที่สุดของวันนี้ แล้วทำก่อนสิ่งอื่น"
  },
  {
    "image": "23_RISE.png",
    "shadow": "Ego elevation / spiritual superiority / หนีจากโลกจริง",
    "symbol": "Vertical Axis + 8-point Star + concentric halo",
    "color": "Sacred Ivory + Champagne Gold",
    "affirmation": "I rise, remain grounded, and carry the light with me.",
    "ritual": "ใช้ Aroma Balm → หายใจ 3 ครั้ง → ถาม “How do I want to show up in the world today?”"
  },
  {
    "image": "24_ASCEND.png"
  }
];