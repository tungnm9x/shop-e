import { Component, OnInit } from '@angular/core';
import { ROUTES_CONST } from '@core/const';
import { of } from 'rxjs';

@Component({
  selector: 'nmt-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;

  tabs = [
    {
      id: 'desc',
      label: 'Mô tả',
    },
    {
      id: 'more-info',
      label: 'Thông tin thêm',
    },
  ];

  detail$ = of({
    id: 1,
    name: 'Son Thỏi Lì 3CE Vỏ Trong Suốt Red Muse - Màu Đỏ 3.5g',
    shortDesc:
      'Mặt Nạ Ngủ hoa hồng ROSE SLEEPING MASK là phiên bản cải tiến mới nhất của thương hiệu mỹ phẩm cao cấp C13 Beauty, với các thành phần chính như là: Glycerin, Rosa Centifolia Flower Water,Hydrolyzed Collagen, Camellia Japonica Flower Extract,… giúp dưỡng ẩm, làm dịu da, se khít lỗ chân lông, hỗ trợ phục hồi sự cân bằng hệ vi sinh trên da trong suốt đêm dài, giúp da tươi mới, căng tràn sức sống hơn mỗi khi thức dậy.',
    desc: `
    <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content active" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
										

<p><strong>Rose Sleeping Mask (Tuýp 50g)</strong></p>
<p>Mặt Nạ Ngủ hoa hồng ROSE SLEEPING MASK là phiên bản cải tiến mới nhất của thương hiệu mỹ phẩm cao cấp C13 Beauty, với các thành phần chính như là: Glycerin, Rosa Centifolia Flower Water, Hydrolyzed Collagen, Camellia Japonica Flower Extract,… giúp dưỡng ẩm, làm dịu da, se khít lỗ chân lông, hỗ trợ phục hồi sự cân bằng hệ vi sinh trên da trong suốt đêm dài, giúp da tươi mới, căng tràn sức sống hơn mỗi khi thức dậy.</p><br/>
<p><strong>Thành phần sản phẩm:</strong></p>
<p>Aqua, Glycerin, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Panthenol, Rosa Centifolia Flower Water, Hydrolyzed Collagen, Camellia Japonica Flower Extract, Carthamus Tinctorius Flower Extract, Chrysanthemum Indicum Flower Extract, Chrysanthemum Morifolium Flower Extract, Lilium Tigrinum Extract, Lonicera Japonica Flower Extract, Magnolia Kobus Branch/Flower/Leaf Extract, Nelumbo Nucifera Flower Extract, Prunus Mume Flower Extract, Prunus Serrulata Flower Extract, Camellia Sinensis Leaf Extract, Sodium Hyaluronate, Butylene Glycol, Gluconolactone, Hydrogenated Polydecene, Phenoxyethanol, Polyacrylate Crosspolymer-11, Arginine, Carbomer, Disodium Edta , Parfum, Potassium Sorbate, Sodium Benzoate, 1,2-Hexanediol, Calcium Gluconate, Caprylyl Glycol, Phenethyl, Polysorbate 80, Ci 16035.</p>
<p>&nbsp;</p>
<p><strong>Đặc trưng sản phẩm:</strong><br>
– Chứa thành phần Glycerin tăng cường khả năng dưỡng ẩm, ngăn ngừa lão hóa da , cho làn da luôn rạng rỡ, tươi sáng và có độ căng bóng khỏe mạnh.<br>
– Chứa thành phần Rosa Centifolia Flower Water là nước chưng cất hoa giúp dưỡng ẩm, se khít lỗ chân lông, chống oxy hóa và bảo vệ da khỏi tác nhân ô nhiễm môi trường.<br>
– Hydrolyzed collagen hay còn gọi là collagen thuỷ phân giúp bổ sung độ ẩm cần thiết cho da, ngăn ngừa nếp nhăn khôi phục độ đàn hồi của da và cải thiện lỗ chân lông to.<br>
– Ngoài ra trong sản phẩm còn chứa các thành phần tự nhiên như hoa trà, hoa rum, hoa cúc vàng, hoa cúc mâm xôi, hoa loa kèn, lá kim ngân,… giúp làm dịu da, dưỡng ẩm, ngăn ngừa lão hóa cho da.<br>
– Kết cấu sản phẩm mỏng nhẹ, thẩm thấu nhanh vào da, không gây bết dính, mang lại cho làn da thoáng mát cùng cảm giác dễ chịu khi dùng.</p>
<p>&nbsp;</p>
<p><strong>&nbsp;Đối tượng khuyên dùng:&nbsp;</strong><br>
– Dành cho mọi loại da.<br>
– Dành cho làn da thiếu ẩm, mất nước.<br>
– Dành cho làn da khô, mất sức sống.</p>
<p>&nbsp;</p>
<p><strong>Hướng dẫn sử dụng:</strong><br>
– Sau khi làm sạch mặt, sử dụng nước cân bằng dưỡng da.<br>
– Lấy một lượng vừa đủ chấm lên đầu mũi, má, trán, cằm.<br>
– Thoa nhẹ nhàng theo chiều kết cấu da, từ trong ra ngoài.<br>
– Để qua đêm và không cần rửa lại với nước.<br>
– Sử dụng 2-3 lần/tuần.</p>
<p>&nbsp;</p>
<p><strong>Bảo quản:</strong><br>
– Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp hoặc nơi có nhiệt độ cao / ẩm ướt.<br>
– Tránh xa tầm tay trẻ em.<br>
– Đậy nắp kín sau khi sử dụng.</p>
<p>*Lưu ý: Sản phẩm chỉ có tại Gà Spa Quận 1, Quận 10, Quận 7</p>
				</div>
    `,
    additionalInfo: [
      {
        label: 'Weight',
        content: '1.2 kg',
      },
      {
        label: 'Dimensions',
        content: '12 × 2 × 1.5 cm',
      },
    ],
  });

  relatedProducts$ = of([
    {
      id: 1,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/06/1707x1707-scaled.jpg',
      name: 'Rose Sleeping Mask – 50g',
      price: 388000,
    },
    {
      id: 2,
      imageUrl: 'https://gaspa.vn/wp-content/uploads/2022/06/KCN-scaled.jpeg',
      name: 'Kem Chống Nắng Sunflower SPF 50+ PA++++ 30g',
      price: 488000,
    },
    {
      id: 3,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/06/Collagen-mask-scaled.jpeg',
      name: 'KEVA MASK Collagen – 25g',
      price: 1110000,
    },
    {
      id: 4,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/06/Body-ngay-scaled.jpeg',
      name: 'Kem Dưỡng Ngày Lotus Body Whitening – 150g',
      price: 150000,
    },
  ]);

  constructor() {}

  ngOnInit(): void {}
}
