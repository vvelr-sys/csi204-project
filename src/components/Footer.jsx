import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-100 border-t border-earth-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Pitch */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-sage-300">
              <Leaf className="h-6 w-6 text-sage-400" />
              <span className="tracking-wide">re-wear</span>
            </Link>
            <p className="text-earth-300 text-sm leading-relaxed">
              แพลตฟอร์มส่งต่อและซื้อขายเสื้อผ้ามือสองเพื่อส่งเสริมระบบเศรษฐกิจหมุนเวียนและลดขยะแฟชั่น ร่วมเป็นส่วนหนึ่งในการรักษาโลกใบนี้กับเรา
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-earth-400 hover:text-sage-400 transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-earth-400 hover:text-sage-400 transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-earth-400 hover:text-sage-400 transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-earth-200 font-semibold text-sm tracking-wider uppercase mb-4">สำรวจเว็บไซต์</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-earth-400 hover:text-sage-300 transition-colors">หน้าแรก</Link>
              </li>
              <li>
                <Link to="/wardrobe" className="text-earth-400 hover:text-sage-300 transition-colors">ตู้เสื้อผ้าของฉัน</Link>
              </li>
              <li>
                <Link to="/eco-impact" className="text-earth-400 hover:text-sage-300 transition-colors">คะแนนความยั่งยืน</Link>
              </li>
            </ul>
          </div>

          {/* Settings & Account */}
          <div>
            <h3 className="text-earth-200 font-semibold text-sm tracking-wider uppercase mb-4">บัญชีผู้ใช้</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/profile" className="text-earth-400 hover:text-sage-300 transition-colors">ตั้งค่าโปรไฟล์</Link>
              </li>
              <li>
                <Link to="/orders" className="text-earth-400 hover:text-sage-300 transition-colors">ประวัติคำสั่งซื้อ</Link>
              </li>
              <li>
                <Link to="/payment" className="text-earth-400 hover:text-sage-300 transition-colors">วิธีการชำระเงิน</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Eco Pitch */}
          <div>
            <h3 className="text-earth-200 font-semibold text-sm tracking-wider uppercase mb-4">ความมุ่งมั่นของเรา</h3>
            <div className="bg-earth-800/50 p-4 rounded-xl border border-earth-700/50">
              <h4 className="text-xs font-bold text-sage-400 flex items-center gap-1.5 mb-1.5">
                <Leaf className="h-3.5 w-3.5" />
                ECO STATISTICS
              </h4>
              <p className="text-xs text-earth-300 leading-normal">
                เสื้อผ้าทุกชิ้นที่ผ่าน re-wear ช่วยประหยัดน้ำได้ถึง 2,700 ลิตร และลดการปล่อยก๊าซคาร์บอนไดออกไซด์ได้มากกว่าการซื้อเสื้อผ้าใหม่ 80%
              </p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-earth-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-earth-400">
          <p>© {new Date().getFullYear()} Re-wear Project. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-sage-300 transition-colors">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="hover:text-sage-300 transition-colors">เงื่อนไขการใช้งาน</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
