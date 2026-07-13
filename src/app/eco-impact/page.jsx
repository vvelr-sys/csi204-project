"use client";

import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Leaf, Award, Gift, Flame, Droplet, TreePine } from 'lucide-react';

const mockRewards = [
  {
    id: 1,
    title: 'คูปองส่วนลด 15%',
    pointsRequired: 300,
    description: 'ลดเพิ่มไม่มีขั้นต่ำสำหรับสินค้าทุกประเภท',
    available: true,
  },
  {
    id: 2,
    title: 'บริการจัดส่งฟรีรักษ์โลก',
    pointsRequired: 150,
    description: 'จัดส่งโดยบริการขนส่งชดเชยคาร์บอนฟุตพริ้นท์',
    available: true,
  },
  {
    id: 3,
    title: 'กระเป๋าผ้ากระสอบ Re-wear Tote Bag',
    pointsRequired: 600,
    description: 'กระเป๋าผ้ารีไซเคิลพิมพ์ลาย Limited Edition',
    available: false,
  },
];

export default function EcoImpact() {
  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Left */}
        <div className="lg:col-span-1">
          <Sidebar />
        </div>

        {/* Content Right */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Main Dashboard Card */}
          <div className="bg-gradient-to-br from-sage-800 to-sage-950 rounded-3xl p-6 sm:p-8 text-white shadow-lg border border-sage-700/30 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none">
              <Leaf className="w-full h-full text-white" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-white/10 rounded-xl">
                  <Leaf className="h-6 w-6 text-sage-300 animate-spin-slow" />
                </span>
                <div>
                  <h1 className="text-xl font-bold">แผงควบคุมความยั่งยืน</h1>
                  <p className="text-xs text-sage-200">สถิติการรักษ์โลกจากการหมุนเวียนแฟชั่นของคุณ</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {/* Stat 1 */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <div className="p-2.5 bg-sage-500/20 text-sage-300 rounded-xl">
                    <Flame className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-sage-200 font-medium">ลดคาร์บอนไฟเบอร์</span>
                    <span className="block text-lg font-bold">15.8 kg CO₂e</span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <div className="p-2.5 bg-sage-500/20 text-sage-300 rounded-xl">
                    <Droplet className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-sage-200 font-medium">ประหยัดน้ำใช้</span>
                    <span className="block text-lg font-bold">11,200 ลิตร</span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <div className="p-2.5 bg-sage-500/20 text-sage-300 rounded-xl">
                    <TreePine className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-sage-200 font-medium">เทียบเท่าการปลูกต้นไม้</span>
                    <span className="block text-lg font-bold">1.6 ต้น</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar to next Level */}
              <div className="pt-2 space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span>คะแนนปัจจุบัน: 450 Eco Points</span>
                  <span>เป้าหมายต่อไป: 600 แต้ม</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-sage-400 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-[10px] text-sage-200">อีกเพียง 150 คะแนนคุณจะเลื่อนขั้นระดับ Eco Master พร้อมสิทธิแลกรางวัลสุดพิเศษ!</p>
              </div>

            </div>
          </div>

          {/* Reward Catalog */}
          <div className="bg-white rounded-2xl border border-earth-200/60 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-earth-100 pb-5">
              <h2 className="text-lg font-bold text-earth-900 flex items-center gap-2">
                <Gift className="h-5 w-5 text-sage-600" />
                กล่องแลกรางวัลสีเขียว (Redeem Rewards)
              </h2>
              <p className="text-xs text-earth-500 mt-1">ใช้คะแนนสะสม Eco Points ของคุณแลกสิทธิพิเศษและของพรีเมียมรักษ์โลก</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockRewards.map((reward) => (
                <div 
                  key={reward.id} 
                  className={`border border-earth-200 rounded-2xl p-5 flex flex-col justify-between hover:border-sage-500 transition-all ${
                    !reward.available ? 'opacity-65' : ''
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="inline-flex px-2.5 py-1 bg-sage-50 border border-sage-200 text-sage-800 text-[10px] font-bold rounded-lg">
                        {reward.pointsRequired} คะแนน
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-earth-800 pt-1">{reward.title}</h3>
                    <p className="text-xs text-earth-500 leading-normal">{reward.description}</p>
                  </div>

                  <button 
                    disabled={!reward.available}
                    className={`w-full mt-6 py-2 rounded-full text-xs font-semibold transition-all ${
                      reward.available 
                        ? 'bg-sage-600 hover:bg-sage-700 text-white hover-lift' 
                        : 'bg-earth-100 text-earth-400 cursor-not-allowed'
                    }`}
                  >
                    {reward.available ? 'แลกของรางวัล' : 'สิทธิ์หมดชั่วคราว'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Eco Mission Card */}
          <div className="bg-earth-50 border border-earth-200/80 p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-sage-100 rounded-full text-sage-700 flex-shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-earth-800">มิชชันความดี: นำถุงผ้ามาช็อปที่ Re-wear Box</h3>
                <p className="text-xs text-earth-500">รับแต้มสะสมทันที +50 Eco Points เมื่อทำการนัดรับสินค้า ณ ตู้ Drop-off</p>
              </div>
            </div>
            <button className="bg-white hover:bg-earth-100 border border-earth-200 text-earth-800 text-xs font-semibold px-5 py-2.5 rounded-full whitespace-nowrap transition-colors">
              ดูรายละเอียดภารกิจ
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
