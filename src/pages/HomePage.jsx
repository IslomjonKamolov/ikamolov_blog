import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const [create, setCreate] = useState(0)
    window.addEventListener('keyup', (e) => {
      if (e.keyCode == 106 && e.shiftKey == true && e.ctrlKey == true) {
        window.location.href = '/create'
        console.log(e);
      }
    })


    return (
        <section className='homePage'>
            <div className="homePage__container">
                <h1 className='main__title'>Sayt haqida</h1>
                <p className="about__site__text">
                    Salom! Bu sayt orqali siz shunchaki blog postlarni o'qishingiz mumkin. Hozir siz ko'rib turgan narsalar sayni 1.0 versiyasi bo'lib kelajakda yangilanishi kutilmoqda. Sayt hozirda juda ko'p kamchiliklarga ega lekin bloglarni o'qishingiz uchun barcha narsa yetarli. Agar sizga DARK MODE noqulay bo'lsa yaqin oradagi yangilanish bu noqulaylikni bartaraf etish uchun qilinadi.
                </p>
                <h2 className='second__title'>Men haqimda</h2>
                <p className="about__site__text">
                    Men Islomjon Kamolovman. Shunchaki oddiy maktab o'quvchisi. Blog sayt qilishni 4-5 oydan beri orzu qilib yurgandim lekin bilimlarim yetarli emas edi. Mana bugun yetarli bilimga ega bo'lib bu saytni yasadim. Blogimdagi barcha narsalar mening shaxsiy fikrlarim va o'qigan bilimlarim asosida yoziladi. 09.08.2008 kuni tug'ulganman. Yaxshi ko'rgan ovqatim osh. Nima uchun bularni yozdim? Yozishga boshqa narsa bo'lmagani uchun.
                </p>
                <Link to="posts" className="GoToPosts__link">Postlarni ko'rish</Link>
            </div>
        </section>
    )
}
