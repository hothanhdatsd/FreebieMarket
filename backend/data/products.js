const products = [
  {
    name: "Rau cải xoăn Kale xanh Đà Lạt (Cải Kale xanh)",
    image: "/images/cai-xoan-2.jpg",
    description:
      "Cải xoăn Kale là một loại rau thuộc họ cải xanh kale hoặc rau cải kale tím, nó thuộc họ gần với cải bắp nhất, trong đó phần lá giữa không tạo thành đầu. Rau cải xoăn Kale chứa hàm lượng chất xơ cao rất tốt cho sức khỏe con người Cái xoăn Kale giàu vitamin A, vitamin C ( nhiều hơn cam), cung cấp chất béo lành mạnh cùng lượng canxi dồi dào (nhiều hơn sữa),...vvNgoài lợi ích đối với sức khỏe, tác dụng của rau cải xoăn trong làm đẹp, giúp làm đẹp tóc, da và móng cho các chị em phụ nữ.",
    category: "Rau",
    price: 70000,
    countInStock: 30,
    rating: 4,
    numReviews: 20,
  },
  {
    name: "Cải bó xôi Đà Lạt - Rau Chân Vịt - Rau Cải Bina",
    image: "/images/cai-bo-xoi-1.jpg",
    description:
      "Cải bó xôi là loại rau không mấy xa lạ với người Việt ta. Bởi nó được dùng để chế biến thành các món ăn rất ngon và hợp khẩu vị. Nhưng nó ít được biết đến là vị thuốc chữa được rất nhiều loại bệnh. Ngoài cái tên cải bó xôi, nó còn có nhiều tên khác như: rau chân vịt, rau bắp xôi, rau nhà chùa, cải bina… Đây là loài cây thuộc họ nhà Dền và có xuất xứ từ miền Trung và Tây Nam Á.",
    category: "Sofa",
    price: 40000,
    countInStock: 200,
    rating: 5,
    numReviews: 10,
  },
  {
    name: "Ớt chuông Đà Lạt ",
    image: "/images/ot-xanh-ot-do-da-lat-3.jpg",
    description:
      "Ớt xanh, ớt đỏ Đà Lạt hay còn được biết đến với tên ớt chuông hay ớt ngọt. Có tên khoa học là Capsicum Annum L. Gọi nó là ớt Đà Lạt bởi đây chính là nơi “khai sinh” ra loại ớt này ở nước ta. Nó có xuất hiện trong các gian bếp gia đình, nhà hàng trên thế giới từ rất lâu. Tuy nhiên nếu nói đến ở Việt Nam, thì Đà lạt chính là nơi đầu tiên trồng được loại ớt này và luôn có chất lượng ổn định.",
    category: "Rau",
    price: 70000,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Rau Xà Lách Rocket",
    image: "/images/rocket.jpg",
    description:
      "Rau Rocket còn có tên gọi khác là rau Arugula. Đây là một loại rau rất giàu dinh dưỡng và ngày càng được ưa chuộng trên thị trường. Rau rocket thường được sử dụng để làm salad trộn. Hiện nay, sản phẩm rau rocket Hà Nội đang được rất nhiều chị em săn lùng trên thị trường.",
    category: "Rau",
    price: 40000,
    countInStock: 23,
    rating: 5,
    numReviews: 4,
  },
  {
    name: "Rau cần tây",
    image: "/images/can-tay-1.jpg",
    description:
      "Cần tây thuộc họ Apiaceae, bao gồm: rau mùi, mùi tây, cà rốt và celeriac. Thân cây giòn làm cho loại rau này trở thành một món ăn nhẹ phổ biến, ít calo và có thể mang lại rất nhiều lợi ích cho sức khỏe.",
    category: "Rau",
    price: 38000,
    countInStock: 32,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Bông atiso tươi",
    image: "/images/wSe5yhhAuTwNv_OHIZmUePf19uTvikaPbong_atiso.jpg",
    description:
      "Bông Atisô tươi là một trong những đặc sản nổi tiếng và đặc trưng nhất của Đà Lạt. Trong hoa atiso chứa hàm lượng dinh dưỡng cao có nhiều công dụng cho sức khỏe người sử dụng. ",
    category: "Rau",
    price: 165000,
    countInStock: 13,
    rating: 3,
    numReviews: 30,
  },
  {
    name: "Cà chua bi",
    image: "/images/ca-chua-bi-do-min.jpg",
    description:
      "Cà chua bi còn được gọi với cái tên khá mỹ miều đó là Cherry Tomato . Đây là loại cà chua trái nhỏ quả hình tròn hoặc dài, màu đỏ, quả đều nhìn rất đẹp. Cà chua bi tuy quả nhỏ, ngọt hơn cà chua thông thường.",
    category: "Rau",
    price: 80000,
    countInStock: 12,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Súp lơ Baby",
    image: "/images/lo-baby-min.jpg",
    description:
      "Súp lơ baby còn có tên gọi khác là bông cải baby. Đây là loại siêu thực phẩm bởi giá của nó không những cao hơn các loại cải thường và công dụng tuyệt vời cho sức khỏe của người sử dụng.",
    category: "Rau",
    price: 58000,
    countInStock: 340,
    rating: 4,
    numReviews: 93,
  },
  {
    name: "Hạt giống cà chua",
    image: "/images/hat-giong-ca-chua-2-min.jpg",
    description:
      "Cà chua là loại quả không thể thiếu trong bữa cơm gia đình. Nó dùng để trang trí giúp tăng hương vị và màu sắc cho món ăn, đồng thời là nguyên liệu rất tốt để chị em làm đẹp.",
    category: "Hạt giống",
    price: 116000,
    countInStock: 120,
    rating: 5,
    numReviews: 32,
  },
  {
    name: "Hạt giống cải rổ",
    image: "/images/ky-thuat-trong-cai-ro.jpg",
    description:
      "Cải rổ là loại rau rất dễ ăn mà lại tốt cho sức khỏe, có thể chế biến thành nhiều món ăn trong gia đình nên được nhiều người lựa chọn trồng tại nhà, giúp cung cấp nguồn thực phẩm sạch, hữu cơ tốt cho sức khỏe.",
    category: "Gương",
    price: 71000,
    countInStock: 30,
    rating: 4,
    numReviews: 19,
  },
  {
    name: "Hạt giống bầu",
    image: "/images/hat-giong-bau-2.jpg",
    description:
      "Ngày nay xu hướng trồng rau xanh tại nhà đang được rất nhiều người lựa chọn, bởi rau củ mua ở ngoài chợ không đảm bảo nguồn gốc, độ an toàn. Với bầu cũng vậy, hiện có rất nhiều gia đình chọn mua hạt giống bầu về tự gieo trồng tại nhà. Vậy cách gieo trồng hạt giống bầu như thế nào để cho ra năng suất cũng như chất lượng tốt. Hãy theo dõi ngay bài viết dưới đây của Nông Sản Dũng Hà để biết được kỹ thuật trồng và chăm sóc hạt giống bầu nhé. ",
    category: "Gương",
    price: 33000,
    countInStock: 40,
    rating: 4,
    numReviews: 52,
  },
  {
    name: "Hạt giống xà lách",
    image: "/images/hat-giong-xa-lach-min.jpg",
    description:
      "Hạt giống xà lách Đài Loan được nhập khẩu trực tiếp từ các thương hiệu hạt giống nổi tiếng chính gốc Đài Loan. Đảm bảo chất lượng và tỷ lệ nảy mầm cao nhất.",
    category: "Electronics",
    price: 25000,
    countInStock: 120,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
