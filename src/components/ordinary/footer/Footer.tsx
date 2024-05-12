import {FC} from "react";
import Image from "next/image";
import Link from "next/link";

import call from "./assets/call.svg"
import email from "./assets/email.svg"
import telegram from "./assets/telegram.svg"
import github from "./assets/github.svg"

import s from "./footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={s.footer_wrap}>
      <div className={s.footer}>
        <div className={s.left}>
          <div className={s.title}>Camera Shop</div>
          <div className={s.description}>тестовое задание</div>
        </div>

        <div className={s.right}>
          <div className={s.contact_title}>Контакты</div>
          <div className={s.contact_list}>
            <Link className={s.link} href="mailto:balisker@mail.ru">
              <Image src={email} alt="email"/>
              <span>balisker@mail.ru</span>
            </Link>
            <Link className={s.link} href="tel:+79896653436">
              <Image src={call} alt="call"/>
              <span>+7(989)-665-34-36</span>
            </Link>
            <Link className={s.link} href="https://t.me/Al_isker">
              <Image src={telegram} alt="telegram"/>
              <span>@Al_isker</span>
            </Link>
            <Link className={s.link} href="https://github.com/al-isker">
              <Image src={github} alt="github"/>
              <span>al-isker</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};