"use client";

import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { CreditCard, Plus, Trash2, CheckCircle, ShieldCheck } from 'lucide-react';

const mockPaymentMethods = [
  {
    id: 1,
    type: 'card',
    brand: 'Visa',
    last4: '4242',
    expDate: '12/28',
    holderName: 'PIMCHANOK S.',
    isDefault: true,
  },
  {
    id: 2,
    type: 'promptpay',
    brand: 'PromptPay',
    number: '081-XXX-5678',
    isDefault: false,
  },
];

export default function PaymentMethods() {
  const [methods, setMethods] = useState(mockPaymentMethods);

  const deleteMethod = (id) => {
    setMethods(methods.filter(m => m.id !== id));
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Left */}
        <div className="lg:col-span-1">
          <Sidebar />
        </div>

        {/* Content Right */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-earth-200/60 p-6 sm:p-8 shadow-sm">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-earth-100 pb-5 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-earth-900">ช่องทางการชำระเงิน</h1>
                <p className="text-xs text-earth-500 mt-1">จัดการบัตรเครดิต บัญชีธนาคาร และ PromptPay เพื่อความสะดวกรวดเร็วในการทำรายการ</p>
              </div>
              <button className="flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover-lift hover-glow transition-all">
                <Plus className="h-4.5 w-4.5" />
                เพิ่มช่องทางใหม่
              </button>
            </div>

            {/* List of Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {methods.map((method) => {
                if (method.type === 'card') {
                  return (
                    <div 
                      key={method.id} 
                      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-earth-800 via-earth-800 to-clay-950 p-6 text-white shadow-md border border-earth-700 flex flex-col justify-between aspect-[1.6/1]"
                    >
                      {/* Premium Card Graphic Details */}
                      <div className="flex justify-between items-start z-10">
                        <div>
                          <span className="block text-[10px] text-earth-300 font-bold uppercase tracking-widest">Credit Card</span>
                          <span className="block text-sm font-semibold pt-1">{method.brand}</span>
                        </div>
                        {method.isDefault && (
                          <span className="flex items-center gap-1 text-[9px] bg-sage-600/90 text-white border border-sage-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                            <CheckCircle className="h-2.5 w-2.5" />
                            ค่าเริ่มต้น
                          </span>
                        )}
                      </div>

                      <div className="z-10 py-4">
                        <span className="block text-lg font-mono tracking-widest text-earth-100">
                          ••••  ••••  ••••  {method.last4}
                        </span>
                      </div>

                      <div className="flex justify-between items-end z-10">
                        <div>
                          <span className="block text-[9px] text-earth-400 uppercase">Card Holder</span>
                          <span className="block text-xs font-semibold uppercase">{method.holderName}</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-[9px] text-earth-400 uppercase">Expires</span>
                          <span className="block text-xs font-semibold">{method.expDate}</span>
                        </div>
                      </div>

                      {/* Delete icon */}
                      <button 
                        onClick={() => deleteMethod(method.id)}
                        className="absolute right-3.5 bottom-3.5 p-1.5 bg-white/10 hover:bg-clay-600 rounded-full transition-colors hover:scale-105"
                      >
                        <Trash2 className="h-3.5 w-3.5 text-earth-200" />
                      </button>
                    </div>
                  );
                } else {
                  return (
                    <div 
                      key={method.id} 
                      className="border border-earth-200 rounded-2xl p-6 flex flex-col justify-between bg-earth-50/30 border-dashed hover:border-sage-400 transition-colors aspect-[1.6/1]"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="p-2.5 bg-sage-50 text-sage-600 rounded-xl border border-sage-200">
                            <CreditCard className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-earth-800">{method.brand}</span>
                            <span className="block text-xs text-earth-400">{method.number}</span>
                          </div>
                        </div>
                        {method.isDefault && (
                          <span className="flex items-center gap-1 text-[9px] bg-sage-50 border border-sage-200 text-sage-800 px-2 py-0.5 rounded-full font-semibold">
                            <CheckCircle className="h-2.5 w-2.5" />
                            ค่าเริ่มต้น
                          </span>
                        )}
                      </div>

                      <div className="pt-4 mt-auto flex justify-between items-center border-t border-earth-150">
                        <span className="text-[10px] text-earth-400">ผูกกับเบอร์โทรศัพท์มือถือ</span>
                        <button 
                          onClick={() => deleteMethod(method.id)}
                          className="p-1.5 text-earth-400 hover:text-clay-600 rounded-full hover:bg-clay-50/50 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            {/* Secure Payments Pitch */}
            <div className="mt-8 border-t border-earth-100 pt-6 flex flex-col sm:flex-row items-center gap-4 text-earth-500">
              <ShieldCheck className="h-8 w-8 text-sage-600 flex-shrink-0" />
              <div className="text-center sm:text-left space-y-0.5">
                <h4 className="text-xs font-bold text-earth-700">การชำระเงินที่ปลอดภัยอย่างสมบูรณ์แบบ</h4>
                <p className="text-[10px] leading-normal">
                  ข้อมูลบัตรและธุรกรรมทั้งหมดได้รับการเข้ารหัสผ่านโปรโตคอลความปลอดภัย SSL/TLS ที่มีความปลอดภัยระดับสากล และไม่จัดเก็บรหัส CVC ของท่านบนเซิร์ฟเวอร์
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
