import Image from 'next/image'
import React from 'react'
import { Timer } from 'lucide-react'

export default function BlogMain() {
  return (
    <div className="w-2/3">
      <span className='bg-[#E2F0FE] text-xs font-medium text-[#0F4F9E] rounded-sm py-1 px-2'>Quản lý sản xuất</span>
      <h1 className='font-extrabold text-4xl text-[#050505] mt-4'>Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết</h1>
      <div className='flex items-center justify-between py-2 mt-4'>
        <div className='flex items-center justify-between gap-2'>
          <div>
            <Image
              src={'/images/fososoft/avatar-author.png'}
              alt="Banner"
              width={64}
              height={64}
            />
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-medium text-[#667F93]'>Tác giả</span>
            <span className='text-base font-bold'>FOSO Creator</span>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between gap-2'>
            <Timer />
            <span className='text-base font-medium text-[#667F93]'>Cập nhật vào 25-05-1999</span>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <Image
          src={'/images/fososoft/quy-trinh-5s.png'}
          alt='Image blog'
          width={900}
          height={600}
        />
      </div>

      <div className='mt-8'>
        <h2 id="quy-trinh-5s" className='text-base font-bold text-[#15AA7A]'>1. Quy trình 5S là gì?</h2>
        <p className='mt-2 text-gray-700'>
          Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất, xuất xứ từ Nhật Bản.
        </p>
        <ul className='list-disc list-inside mt-2'>
          <li><span className='text-[#15AA7A] font-bold'>Seiri</span> (Ngăn nắp)</li>
          <li><span className='text-[#15AA7A] font-bold'>Seiso</span> (Sạch sẽ)</li>
          <li><span className='text-[#15AA7A] font-bold'>Seiton</span> (Trật tự)</li>
          <li><span className='text-[#15AA7A] font-bold'>Shitsuke</span> (Kỷ luật)</li>
          <li><span className='text-[#15AA7A] font-bold'>Seiketsu</span> (Tiêu chuẩn hóa)</li>
        </ul>
      </div>

      <div className='mt-8'>
        <h2 id="loi-ich" className='text-base font-bold text-[#15AA7A]'>2. Lợi ích quy trình 5S đem lại</h2>
        <p className='mt-2 text-gray-700'>
          Quy trình 5S giúp tổ chức cải thiện môi trường làm việc, tạo sự ngăn nắp và hiệu quả hơn.
        </p>
        <div className='mt-6'>
          <Image
            src={'/images/fososoft/quy-trinh-5s.png'}
            alt='Image blog'
            width={900}
            height={600}
          />
        </div>
      </div>

      <div className='mt-8'>
        <h2 id='tai-sao-5s' className='text-base font-bold text-[#15AA7A]'>3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
        <ul className='list-decimal list-inside mt-2 text-gray-700'>
          <li><strong>Cải thiện rõ nét môi trường làm việc</strong></li>
          <li><strong>Tiết kiệm thời gian đáng kể</strong></li>
          <li><strong>Tăng năng suất làm việc</strong></li>
          <li><strong>Tiết kiệm chi phí</strong></li>
          <li><strong>Tăng chất lượng sản phẩm</strong></li>
        </ul>
      </div>
    </div>
  )
}
