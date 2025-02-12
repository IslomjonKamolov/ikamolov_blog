import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HomePage() {
    const [create, setCreate] = useState(0)

    return (
        <section className='homePage'>
            <div className="homePage__container">
                <h1 className='main__title'>Sayt haqida</h1>
                <p className="about__site__text">
                    Xush kelibsiz!
                    Bu sayt shaxsiy blogim bo‘lib, unda hayot, motivatsiya, tajribalar va fikrlarim haqida yozaman. Maqsadim – sizga qiziqarli va foydali bo‘lishi mumkin bo‘lgan mavzularni yoritish.

                    Hozirgi vaqtda saytning 1.02 versiyasi ishga tushgan bo‘lib, hali rivojlanish bosqichida. Bu degani, ba’zi funksiyalar va dizayn elementlari kelajakda yangilanadi. Hozircha saytning asosiy vazifasi blog postlarni o‘qish uchun yetarli.

                    Agar DARK MODE noqulay bo‘lsa, yaqin oradagi yangilanishda ushbu imkoniyat qo‘shiladi. Bundan tashqari, saytni yanada qulayroq va foydali qilish uchun turli taklif va fikrlarga ochiqman.

                    Postlarni ko‘rish uchun pastdagi tugmani bosing va o‘qishni boshlang! 📖🚀
                </p>
                <h2 className='second__title'>Men haqimda</h2>
                <p className="about__site__text">
                    Men Islomjon Kamolovman – o‘z qiziqishlari va fikrlarini tartibga solish uchun shu blogni yaratgan oddiy maktab o‘quvchisi. Blog yuritish g‘oyasi ancha oldin paydo bo‘lgan, lekin texnik bilimlarim yetarli emas edi. Shunga qaramay, o‘rganib, harakat qilib, bugun shu saytni o‘zim yaratdim.

                    Bu blog – mening shaxsiy burchagim. Bu yerda hayot haqidagi fikrlarim, kuzatuvlarim, motivatsion mulohazalarim va o‘rgangan bilimlarimni baham ko‘raman. Ba’zan inson o‘z fikrlarini qog‘ozga (yoki blogga) tushirib, ularni aniqroq anglab yetadi. Balki siz ham shu yerda o‘zingizga foydali narsa toparsiz.

                    Mening hayotimdagi asosiy tamoyillarimdan biri – ikkiyuzlamachilik va soxtalikni yomon ko‘rish. Shuning uchun blogdagi barcha fikrlar samimiy va real bo‘ladi. Agar biror mavzu haqida yozsam, demak, bu haqda o‘ylaganman, tahlil qilganman va o‘zim uchun xulosa chiqarganman.

                    Biroz shaxsiy ma’lumotlarga ham o‘tsak: <br /><hr /> <br />
                    🗓 2008-yil 9-avgustda tug‘ilganman. <br /><hr /> <br />
                    📚 Python va dasturlashga qiziqaman, yangi bilimlarni amaliy yo‘l bilan o‘rganishni yaxshi ko‘raman. <br /><hr /> <br />
                    🎙 Dublaj qilishni o‘rganmoqchiman, Reaper dasturi bilan shug‘ullanyapman. <br /> <hr /><br />
                    📵 Telefondan ortiqcha foydalanishni kamaytirishga harakat qilaman, lekin ba’zan vaqtimni yo‘qotib qo‘yaman. <br /> <hr /><br />

                    Saytimning birinchi versiyasi hali mukammal emas. Kelajakda uni yaxshilashni reja qilganman. Masalan, DARK MODE xususiyati qo‘shilishi kutilmoqda. Lekin hozircha bloglarni o‘qish uchun hamma narsa yetarli. <br /><hr /> <br />

                    Demak, o‘qishga tayyormisiz? 🎯 Pastdagi tugmani bosing va blogga sho‘ng‘ing! 🚀
                </p>
                <br />
                <Link to="posts" className="GoToPosts__link">Postlarni ko'rish</Link>
            </div>
        </section>
    )
}
