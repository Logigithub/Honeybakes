const products = [
  // Add all 330 products manually here with unique image paths, names, and prices
  { id: 'PRO1234100', image: 'imgs/redvel.jpeg', name: 'Red Velvet Cake', quantity: 1, price: 520 },
  { id: 'PRO1234101', image: 'imgs/strawbery.jpeg', name: 'Strawberry Cake', quantity: 1, price: 480 },
  { id: 'PRO1234102', image: 'imgs/cherry.jpg', name: 'Cherry Cake', quantity: 1, price: 600 },
  { id: 'PRO1234103', image: 'imgs/chocolate.jpg', name: 'Chocolate Cake', quantity: 1, price: 560 },
  { id: 'PRO1234104', image: 'imgs/blog2.jpeg', name: 'Chocolate Nuts Cake', quantity: 1, price: 450 },
  { id: 'PRO1234105', image: 'imgs/kiwi.jpg', name: 'Kiwi Cake', quantity: 1, price: 570 },
  { id: 'PRO1234106', image: 'imgs/fruit.jpg', name: 'Fruit Cake', quantity: 1, price: 700 },
  { id: 'PRO1234107', image: 'imgs/dryfruits.jpeg', name: 'Dry Fruits Cake', quantity: 1, price: 550 },
  { id: 'PRO1234108', image: 'pics/Shop1/1.png', name: 'Measuring Cups', quantity: 1, price: 80 },
  { id: 'PRO1234109', image: 'pics/Shop1/2.png', name: 'Measuring spoon', quantity: 1, price: 80 },
  { id: 'PRO1234110', image: 'pics/Shop1/3.png', name: 'Turn table(Plastic)', quantity: 1, price: 180 },
  { id: 'PRO1234111', image: 'pics/Shop1/4.png', name: 'Turn table(Stainless steel)', quantity: 1, price: 1350 },
  { id: 'PRO1234112', image: 'pics/Shop1/5.png', name: 'Waiting Machine', quantity: 1, price: 250 },
  { id: 'PRO1234113', image: 'pics/Shop1/6.png', name: 'Mixing bowl', quantity: 1, price: 110 },
  { id: 'PRO1234114', image: 'pics/Shop1/7.png', name: 'spatula', quantity: 1, price: 85 },
  { id: 'PRO1234115', image: 'pics/Shop1/8.png', name: 'Serrated Knife', quantity: 1, price: 120 },
  { id: 'PRO1234116', image: 'pics/Shop1/9.png', name: 'Pastry Brush', quantity: 1, price: 85 },
  { id: 'PRO1234117', image: 'pics/Shop1/10.png', name: 'Baking pepper roll', quantity: 1, price: 100 },
  { id: 'PRO1234118', image: 'pics/Shop1/11.png', name: 'Cling Wrap', quantity: 1, price: 80 },
  { id: 'PRO1234119', image: 'pics/Shop1/12.png', name: 'Disposable piping bag', quantity: 1, price: 90 },
  { id: 'PRO1234120', image: 'pics/Shop1/13.png', name: 'Scraper Set(Small)', quantity: 1, price: 25 },
  { id: 'PRO1234121', image: 'pics/Shop1/14.png', name: 'Scraper Set(large)', price: 180 },
  { id: 'PRO1234122', image: 'pics/Shop1/15.png', name: 'Stainless Steel', quantity: 1, price: 180 },
  { id: 'PRO1234123', image: 'pics/Shop1/16.png', name: 'Flexible Scraper', quantity: 1, price: 45 },
  { id: 'PRO1234124', image: 'pics/Shop1/17.png', name: 'Whisk', quantity: 1, price: 70 },
  { id: 'PRO1234125', image: 'pics/Shop1/18.png', name: 'Palette Knife Set', quantity: 1, price: 75 },
  { id: 'PRO1234126', image: 'pics/Shop1/19.png', name: 'Electric Beater', quantity: 1, price: 450 },
  { id: 'PRO1234127', image: 'pics/Shop1/20.png', name: 'Seiver', quantity: 1, price: 140 },
  { id: 'PRO1234128', image: 'pics/Shop1/21.png', name: 'Piping Nozzle Set(24 pcs)', quantity: 1, price: 290 },
  { id: 'PRO1234129', image: 'pics/Shop1/22.png', name: 'Writing Nozzle-Thick Noor 2', quantity: 1, price: 40 },
  { id: 'PRO1234130', image: 'pics/Shop1/23.png', name: 'Noor Nozzle-Writer Fine', quantity: 1, price: 40 },
  { id: 'PRO1234131', image: 'pics/Shop1/24.png', name: 'Writing Nozzle-Superfine', quantity: 1, price: 40 },
  { id: 'PRO1234132', image: 'pics/Shop1/25.png', name: 'Grass Pipning Nozzle-No:48', quantity: 1, price: 40 },
  { id: 'PRO1234133', image: 'pics/Shop1/26.png', name: '2D Piping Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234134', image: 'pics/Shop1/27.png', name: '1M Piping Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234135', image: 'pics/Shop1/28.png', name: '895/Basket Weave Piping Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234136', image: 'pics/Shop1/29.png', name: '104 Piping Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234137', image: 'pics/Shop1/30.png', name: '102 Piping Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234138', image: 'pics/Shop1/31.png', name: '127 Piping Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234139', image: 'pics/Shop1/32.png', name: 'Noor 10 Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234140', image: 'pics/Shop1/33.png', name: 'Noor 12 Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234141', image: 'pics/Shop1/34.png', name: 'Noor 12 Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234142', image: 'pics/Shop1/35.png', name: 'Noor 45 Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234143', image: 'pics/Shop1/36.png', name: 'Noor 24 Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234144', image: 'pics/Shop1/37.png', name: 'Noor 36 Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234145', image: 'pics/Shop1/38.png', name: 'Noor 15 Nozzle', quantity: 1, price: 40 },
  { id: 'PRO1234146', image: 'pics/Shop1/39.png', name: 'Piping Nozzle 123', quantity: 1, price: 40 },
  { id: 'PRO1234147', image: 'pics/Shop1/40.png', name: 'Sample Cake 40', quantity: 1, price: 890 },
  { id: 'PRO1234148', image: 'pics/Shop1/41.png', name: 'Sample Cake 41', quantity: 1, price: 900 },
  { id: 'PRO1234149', image: 'pics/Shop1/42.png', name: 'Sample Cake 42', quantity: 1, price: 910 },
  { id: 'PRO1234150', image: 'pics/Shop1/43.png', name: 'Sample Cake 43', quantity: 1, price: 920 },
  { id: 'PRO1234151', image: 'pics/Shop1/44.png', name: 'Sample Cake 44', quantity: 1, price: 930 },
  { id: 'PRO1234152', image: 'pics/Shop1/45.png', name: 'Sample Cake 45', quantity: 1, price: 940 },
  { id: 'PRO1234153', image: 'pics/Shop1/46.png', name: 'Sample Cake 46', quantity: 1, price: 950 },
  { id: 'PRO1234154', image: 'pics/Shop1/47.png', name: 'Sample Cake 47', quantity: 1, price: 960 },
  { id: 'PRO1234155', image: 'pics/Shop1/48.png', name: 'Sample Cake 48', quantity: 1, price: 970 },
  { id: 'PRO1234156', image: 'pics/Shop1/49.png', name: 'Round Aluminium Cake Tin', quantity: 1, price: 190 },
  { id: 'PRO1234157', image: 'pics/Shop1/50.png', name: 'Aluminium Rectangle Cake Tin', quantity: 1, price: 340 },
  { id: 'PRO1234158', image: 'pics/Shop1/51.png', name: 'Aluminium Bread Tin', quantity: 1, price: 740 },

  { id: 'PRO1234160', image: 'pics/Shop2/52.png', name: 'Aluminium Square Tin', quantity: 1, price: 350 },
  { id: 'PRO1234161', image: 'pics/Shop2/53.png', name: 'Aluminium Doll Cake Tin', quantity: 1, price: 165 },
  { id: 'PRO1234162', image: 'pics/Shop2/54.png', name: 'Aluminium Heart Tin', quantity: 1, price: 140 },
  { id: 'PRO1234163', image: 'pics/Shop2/55.png', name: 'Rectangular Trays', quantity: 1, price: 340 },
  { id: 'PRO1234164', image: 'pics/Shop2/56.png', name: 'Rectangular Trays', quantity: 1, price: 360 },
  { id: 'PRO1234165', image: 'pics/Shop2/57.png', name: 'Aluminium Tart Mounld(M)', quantity: 1, price: 25 },
  { id: 'PRO1234166', image: 'pics/Shop2/58.png', name: 'Cupcake Mounld(6 Cavity)', quantity: 1, price: 100 },
  { id: 'PRO1234167', image: 'pics/Shop2/59.png', name: 'Cupcake Mould(12 Cavity)', quantity: 1, price: 230 },
  { id: 'PRO1234168', image: 'pics/Shop2/60.png', name: 'Bake and Serve(S)(50 pcs)', quantity: 1, price: 75 },
  { id: 'PRO1234169', image: 'pics/Shop2/61.png', name: 'Bake and Serve(M)(50m pcs)', quantity: 1, price: 85 },
  { id: 'PRO1234170', image: 'pics/Shop2/62.png', name: 'Bake and Serve Liners(100pcs)', quantity: 1, price: 250 },
  { id: 'PRO1234171', image: 'pics/Shop2/63.png', name: 'Liners Disposable paper(100pcs)', quantity: 1, price: 90 },
  { id: 'PRO1234172', image: 'pics/Shop2/64.png', name: 'Colurmist Get Colors', quantity: 1, price: 55 },
  { id: 'PRO1234173', image: 'pics/Shop2/65.png', name: 'Magic Gel Colours', quantity: 1, price: 70 },
  { id: 'PRO1234174', image: 'pics/Shop2/66.png', name: 'Premium Gel Colours', quantity: 1, price: 60 },
  { id: 'PRO1234175', image: 'pics/Shop2/67.png', name: 'Tiger Essence', quantity: 1, price: 90 },
  { id: 'PRO1234176', image: 'pics/Shop2/68.png', name: 'Maida(1kg)', quantity: 1, price: 70 },
  { id: 'PRO1234177', image: 'pics/Shop2/69.png', name: 'Coco Powder', quantity: 1, price: 140 },
  { id: 'PRO1234178', image: 'pics/Shop2/70.png', name: 'Baking Power(100g)', quantity: 1, price: 30 },
  { id: 'PRO1234179', image: 'pics/Shop2/71.png', name: 'Baking Soda(100g)', quantity: 1, price: 30 },
  { id: 'PRO1234180', image: 'pics/Shop2/72.png', name: 'Bakehaven Evaporex', quantity: 1, price: 80 },
  { id: 'PRO1234181', image: 'pics/Shop2/73.png', name: 'Bakehaven Tylose Powder(75g)', quantity: 1, price: 300 },
  { id: 'PRO1234182', image: 'pics/Shop2/74.png', name: 'Bakehaven CMC Powder(100g)', quantity: 1, price: 140 },
  { id: 'PRO1234183', image: 'pics/Shop2/75.png', name: 'Fondant(250g)', quantity: 1, price: 150 },
  { id: 'PRO1234185', image: 'pics/Shop2/77.png', name: 'Bakehaven Isomalt', quantity: 1, price: 150 },
  { id: 'PRO1234186', image: 'pics/Shop2/78.png', name: 'Magic Colours edible Glue(28g)', quantity: 1, price: 90 },
  { id: 'PRO1234187', image: 'pics/Shop2/79.png', name: 'Edible Food Colouring Pen(B)', quantity: 1, price: 100 },
  { id: 'PRO1234188', image: 'pics/Shop2/80.png', name: 'Metallic Sprail candles', quantity: 1, price: 30 },
  { id: 'PRO1234189', image: 'pics/Shop2/81.png', name: 'Number Candle(1pcs)', quantity: 1, price: 20 },
  { id: 'PRO1234190', image: 'pics/Shop2/82.png', name: 'Number Candle Gold', quantity: 1, price: 20 },
  { id: 'PRO1234191', image: 'pics/Shop2/83.png', name: 'Candle Box Set', quantity: 1, price: 40 },
  { id: 'PRO1234192', image: 'pics/Shop2/84.png', name: 'Birthday Wooden Knife(100)', quantity: 1, price: 80 },
  { id: 'PRO1234193', image: 'pics/Shop2/85.png', name: 'Birthday Knife Plastic(100)', quantity: 1, price: 110 },
  { id: 'PRO1234194', image: 'pics/Shop2/86.png', name: 'Butterfly Toppers(10pcs)', quantity: 1, price: 20 },
  { id: 'PRO1234195', image: 'pics/Shop2/87.png', name: 'Butterfly Toppers(10pcs)', quantity: 1, price: 20 },
  { id: 'PRO1234196', image: 'pics/Shop2/88.png', name: 'Metallic butterflies', quantity: 1, price: 35 },
  { id: 'PRO1234197', image: 'pics/Shop2/89.png', name: 'Precut Edible Butterfly', quantity: 1, price: 55 },
  { id: 'PRO1234198', image: 'pics/Shop2/90.png', name: 'Precut Edible Butterfly', quantity: 1, price: 55 },
  { id: 'PRO1234199', image: 'pics/Shop2/91.png', name: 'Precut Edible Butterfly', quantity: 1, price: 55 },
  { id: 'PRO1234200', image: 'pics/Shop2/92.png', name: 'Imported Wire Butterflies', quantity: 1, price: 35 },
  { id: 'PRO1234201', image: 'pics/Shop2/93.png', name: 'New Non edible butterfly(10pcs)', quantity: 1, price: 20 },
  { id: 'PRO1234202', image: 'pics/Shop2/94.png', name: 'New Non edible butterfly(10pcs)', quantity: 1, price: 20 },
  { id: 'PRO1234203', image: 'pics/Shop2/95.png', name: 'Shade Butterflies(10pcs)', quantity: 1, price: 20 },
  { id: 'PRO1234204', image: 'pics/Shop2/96.png', name: 'Golden Butterfly(12pcs)', quantity: 1, price: 50 },
  { id: 'PRO1234205', image: 'pics/Shop2/97.png', name: 'Golden Butterfly(12pcs)', quantity: 1, price: 50 },
  { id: 'PRO1234206', image: 'pics/Shop2/98.png', name: 'Butterfly Topper', quantity: 1, price: 25 },
  { id: 'PRO1234207', image: 'pics/Shop2/99.png', name: 'Butterfly Topper', quantity: 1, price: 25 },
  { id: 'PRO1234208', image: 'pics/Shop2/100.png', name: 'Butterfly Topper', quantity: 1, price: 25 },
  { id: 'PRO1234209', image: 'pics/Shop3/101.png', name: 'Butterfly Topper multi', quantity: 1, price: 25 },
  { id: 'PRO1234210', image: 'pics/Shop3/102.png', name: 'Glitter Butterfly Topper(10pcs)', quantity: 1, price: 25 },
  { id: 'PRO1234211', image: 'pics/Shop3/103.png', name: 'Butterfly Topper Green', quantity: 1, price: 25 },
  { id: 'PRO1234212', image: 'pics/Shop3/104.png', name: 'Butterfly Topper Multi Green', quantity: 1, price: 25 },
  { id: 'PRO1234213', image: 'pics/Shop3/105.png', name: 'Butterfly Topper Pink with Purple', quantity: 1, price: 25 },
  { id: 'PRO1234214', image: 'pics/Shop3/106.png', name: 'Butterfly Topper Skyblue', quantity: 1, price: 25 },
  { id: 'PRO1234215', image: 'pics/Shop3/107.png', name: 'Butterfly Topprer white', quantity: 1, price: 25 },
  { id: 'PRO1234216', image: 'pics/Shop3/108.png', name: 'Butterfly Topper Blue with Pink', quantity: 1, price: 25 },
  { id: 'PRO1234217', image: 'pics/Shop3/109.png', name: 'Butterfly Topper Striped', quantity: 1, price: 25 },
  { id: 'PRO1234218', image: 'pics/Shop3/110.png', name: 'Butterfly Topper Striped', quantity: 1, price: 25 },
  { id: 'PRO1234219', image: 'pics/Shop3/111.png', name: 'Imported Butterfly(pack of 10)', quantity: 1, price: 25 },
  { id: 'PRO1234220', image: 'pics/Shop3/112.png', name: 'Imported Butterfly(pack of 10)', quantity: 1, price: 25 },
  { id: 'PRO1234221', image: 'pics/Shop3/113.png', name: 'Imported Butterfly(pack of 10)', quantity: 1, price: 25 },
  { id: 'PRO1234222', image: 'pics/Shop3/114.png', name: 'Imported Butterfly(pack of 10)', quantity: 1, price: 25 },
  { id: 'PRO1234223', image: 'pics/Shop3/115.png', name: 'Imported Butterfly(pack of 10)', quantity: 1, price: 25 },
  { id: 'PRO1234224', image: 'pics/Shop3/116.png', name: 'Imported Butterfly(pack of 10)', quantity: 1, price: 25 },
  { id: 'PRO1234225', image: 'pics/Shop3/117.png', name: 'Imported Butterfly(pack of 10)', quantity: 1, price: 25 },
  { id: 'PRO1234226', image: 'pics/Shop3/118.png', name: 'Imported Butterfly(pack of 10)', quantity: 1, price: 25 },
  { id: 'PRO1234227', image: 'pics/Shop3/119.png', name: 'Metallic Gold Butterfly', quantity: 1, price: 45 },
  { id: 'PRO1234228', image: 'pics/Shop3/120.png', name: 'Bts Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234229', image: 'pics/Shop3/121.png', name: 'Jugle Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234230', image: 'pics/Shop3/122.png', name: 'Disney Theme Topper ', quantity: 1, price: 35 },
  { id: 'PRO1234231', image: 'pics/Shop3/123.png', name: 'Cocomelon Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234232', image: 'pics/Shop3/124.png', name: 'Avengers Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234233', image: 'pics/Shop3/125.png', name: 'Boss Baby Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234234', image: 'pics/Shop3/126.png', name: 'Pokemon Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234235', image: 'pics/Shop3/127.png', name: 'Makeup Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234236', image: 'pics/Shop3/128.png', name: 'Spiderman Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234237', image: 'pics/Shop3/129.png', name: 'Back Doll Topper', quantity: 1, price: 35 },
  { id: 'PRO1234238', image: 'pics/Shop3/130.png', name: 'front Doll Topper', quantity: 1, price: 35 },
  { id: 'PRO1234239', image: 'pics/Shop3/131.png', name: 'Mermaid Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234240', image: 'pics/Shop3/132.png', name: 'Elsa Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234241', image: 'pics/Shop3/133.png', name: 'Mickey Mouse Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234242', image: 'pics/Shop3/134.png', name: 'Doremon Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234243', image: 'pics/Shop3/135.png', name: 'Peppa Pig Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234244', image: 'pics/Shop3/136.png', name: 'Anniversary Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234245', image: 'pics/Shop3/137.png', name: 'Car Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234246', image: 'pics/Shop3/138.png', name: 'Cricket Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234247', image: 'pics/Shop3/139.png', name: 'Construction Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234248', image: 'pics/Shop3/140.png', name: 'Animals Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234249', image: 'pics/Shop3/141.png', name: 'Doll Butterfly Topper', quantity: 1, price: 35 },
  { id: 'PRO1234250', image: 'pics/Shop3/142.png', name: 'Chotta bheem Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234251', image: 'pics/Shop3/143.png', name: 'Dora Bujji Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234252', image: 'pics/Shop3/144.png', name: 'Cocomelon Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234253', image: 'pics/Shop3/145.png', name: 'Princess Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234254', image: 'pics/Shop3/146.png', name: 'Football Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234255', image: 'pics/Shop3/147.png', name: 'Tom and Jerry Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234256', image: 'pics/Shop3/148.png', name: 'Masha and Bear Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234257', image: 'pics/Shop3/149.png', name: 'Paw Patrol Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234258', image: 'pics/Shop3/150.png', name: 'Unicorn Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234259', image: 'pics/Shop4/151.png', name: 'Boy or Girl Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234260', image: 'pics/Shop4/152.png', name: 'Car Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234261', image: 'pics/Shop4/153.png', name: 'Baby Shark Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234262', image: 'pics/Shop4/154.png', name: 'Doremon Theme Topper', quantity: 1, price: 35 },
  { id: 'PRO1234263', image: 'pics/Shop4/155.png', name: 'Mickey Mouse Theme Topper', quantity: 1, price: 65 },
  { id: 'PRO1234264', image: 'pics/Shop4/156.png', name: 'Silicon Chocolate Mould', quantity: 1, price: 65 },
  { id: 'PRO1234265', image: 'pics/Shop4/157.png', name: '3D Diamond Heart Pinata Mould', quantity: 1, price: 90 },
  { id: 'PRO1234266', image: 'pics/Shop4/158.png', name: 'Cakesicle Mould with Sticks(50pcs)', quantity: 1, price: 90 },
  { id: 'PRO1234267', image: 'pics/Shop4/159.png', name: 'Sample Cake 159', quantity: 1, price: 2935 },
  { id: 'PRO1234268', image: 'pics/Shop4/160.png', name: 'Sample Cake 160', quantity: 1, price: 2960 },
  { id: 'PRO1234269', image: 'pics/Shop4/161.png', name: 'Sample Cake 161', quantity: 1, price: 2985 },
  { id: 'PRO1234270', image: 'pics/Shop4/162.png', name: 'Sample Cake 162', quantity: 1, price: 3010 },
  { id: 'PRO1234271', image: 'pics/Shop4/163.png', name: 'Sample Cake 163', quantity: 1, price: 3035 },
  { id: 'PRO1234272', image: 'pics/Shop4/164.png', name: 'Sample Cake 164', quantity: 1, price: 3060 },
  { id: 'PRO1234273', image: 'pics/Shop4/165.png', name: 'Sample Cake 165', quantity: 1, price: 3085 },
  { id: 'PRO1234274', image: 'pics/Shop4/166.png', name: 'Sample Cake 166', quantity: 1, price: 3110 },
  { id: 'PRO1234275', image: 'pics/Shop4/167.png', name: 'Sample Cake 167', quantity: 1, price: 3135 },
  { id: 'PRO1234276', image: 'pics/Shop4/168.png', name: 'Sample Cake 168', quantity: 1, price: 3160 },
  { id: 'PRO1234277', image: 'pics/Shop4/169.png', name: 'Sample Cake 169', quantity: 1, price: 3185 },
  { id: 'PRO1234278', image: 'pics/Shop4/170.png', name: 'Sample Cake 170', quantity: 1, price: 3210 },
  { id: 'PRO1234279', image: 'pics/Shop4/171.png', name: 'Sample Cake 171', quantity: 1, price: 3235 },
  { id: 'PRO1234280', image: 'pics/Shop4/172.png', name: 'Sample Cake 172', quantity: 1, price: 3260 },
  { id: 'PRO1234281', image: 'pics/Shop4/173.png', name: 'Sample Cake 173', quantity: 1, price: 3285 },
  { id: 'PRO1234282', image: 'pics/Shop4/174.png', name: 'Sample Cake 174', quantity: 1, price: 3310 },
  { id: 'PRO1234283', image: 'pics/Shop4/175.png', name: 'Sample Cake 175', quantity: 1, price: 3335 },
  { id: 'PRO1234284', image: 'pics/Shop4/176.png', name: 'Sample Cake 176', quantity: 1, price: 3360 },
  { id: 'PRO1234285', image: 'pics/Shop4/177.png', name: 'Sample Cake 177', quantity: 1, price: 3385 },
  { id: 'PRO1234286', image: 'pics/Shop4/178.png', name: 'Sample Cake 178', quantity: 1, price: 3410 },
  { id: 'PRO1234287', image: 'pics/Shop4/179.png', name: 'Sample Cake 179', quantity: 1, price: 3435 },
  { id: 'PRO1234288', image: 'pics/Shop4/180.png', name: 'Sample Cake 180', quantity: 1, price: 3460 },
  { id: 'PRO1234289', image: 'pics/Shop4/181.png', name: 'Sample Cake 181', quantity: 1, price: 3485 },
  { id: 'PRO1234290', image: 'pics/Shop4/182.png', name: 'Sample Cake 182', quantity: 1, price: 3510 },
  { id: 'PRO1234291', image: 'pics/Shop4/183.png', name: 'Sample Cake 183', quantity: 1, price: 3535 },
  { id: 'PRO1234292', image: 'pics/Shop4/184.png', name: 'Sample Cake 184', quantity: 1, price: 3560 },
  { id: 'PRO1234293', image: 'pics/Shop4/185.png', name: 'Sample Cake 185', quantity: 1, price: 3585 },
  { id: 'PRO1234294', image: 'pics/Shop4/186.png', name: 'Sample Cake 186', quantity: 1, price: 3610 },
  { id: 'PRO1234295', image: 'pics/Shop4/187.png', name: 'Sample Cake 187', quantity: 1, price: 3635 },
  { id: 'PRO1234296', image: 'pics/Shop4/188.png', name: 'Sample Cake 188', quantity: 1, price: 3660 },
  { id: 'PRO1234297', image: 'pics/Shop4/189.png', name: 'Sample Cake 189', quantity: 1, price: 3685 },
  { id: 'PRO1234298', image: 'pics/Shop4/190.png', name: 'Sample Cake 190', quantity: 1, price: 3710 },
  { id: 'PRO1234299', image: 'pics/Shop4/191.png', name: 'Sample Cake 191', quantity: 1, price: 3735 },
  { id: 'PRO1234300', image: 'pics/Shop4/192.png', name: 'Sample Cake 192', quantity: 1, price: 3760 },
  { id: 'PRO1234301', image: 'pics/Shop4/193.png', name: 'Sample Cake 193', quantity: 1, price: 3785 },
  { id: 'PRO1234302', image: 'pics/Shop4/194.png', name: 'Sample Cake 194', quantity: 1, price: 3810 },
  { id: 'PRO1234303', image: 'pics/Shop4/195.png', name: 'Sample Cake 195', quantity: 1, price: 3835 },
  { id: 'PRO1234304', image: 'pics/Shop4/196.png', name: 'Sample Cake 196', quantity: 1, price: 3860 },
  { id: 'PRO1234305', image: 'pics/Shop4/197.png', name: 'Sample Cake 197', quantity: 1, price: 3885 },
  { id: 'PRO1234306', image: 'pics/Shop4/198.png', name: 'Sample Cake 198', quantity: 1, price: 3910 },
  { id: 'PRO1234307', image: 'pics/Shop4/199.png', name: 'Sample Cake 199', quantity: 1, price: 3935 },
  { id: 'PRO1234308', image: 'pics/Shop4/200.png', name: 'Sample Cake 200', quantity: 1, price: 3960 },
  { id: 'PRO1234309', image: 'pics/Shop4/201.png', name: 'Sample Cake 201', quantity: 1, price: 3985 },
  { id: 'PRO1234310', image: 'pics/Shop4/202.png', name: 'Sample Cake 202', quantity: 1, price: 4010 },
  { id: 'PRO1234311', image: 'pics/Shop4/203.png', name: 'Sample Cake 203', quantity: 1, price: 4035 },
  { id: 'PRO1234312', image: 'pics/Shop4/204.png', name: 'Sample Cake 204', quantity: 1, price: 4060 },
  { id: 'PRO1234313', image: 'pics/Shop4/205.png', name: 'Sample Cake 205', quantity: 1, price: 4085 },
  { id: 'PRO1234314', image: 'pics/Shop4/206.png', name: 'Sample Cake 206', quantity: 1, price: 4110 },
  { id: 'PRO1234315', image: 'pics/Shop4/207.png', name: 'Sample Cake 207', quantity: 1, price: 4135 },
  { id: 'PRO1234316', image: 'pics/Shop4/208.png', name: 'Sample Cake 208', quantity: 1, price: 4160 },
  { id: 'PRO1234317', image: 'pics/Shop4/209.png', name: 'Sample Cake 209', quantity: 1, price: 4185 },
  { id: 'PRO1234318', image: 'pics/Shop4/210.png', name: 'Sample Cake 210', quantity: 1, price: 4210 },
  { id: 'PRO1234319', image: 'pics/Shop4/211.png', name: 'Sample Cake 211', quantity: 1, price: 4235 },
  { id: 'PRO1234320', image: 'pics/Shop4/212.png', name: 'Sample Cake 212', quantity: 1, price: 4260 },
  { id: 'PRO1234321', image: 'pics/Shop4/213.png', name: 'Sample Cake 213', quantity: 1, price: 4285 },
  { id: 'PRO1234322', image: 'pics/Shop4/214.png', name: 'Sample Cake 214', quantity: 1, price: 4310 },
  { id: 'PRO1234323', image: 'pics/Shop4/215.png', name: 'Sample Cake 215', quantity: 1, price: 4335 },
  { id: 'PRO1234324', image: 'pics/Shop4/216.png', name: 'Sample Cake 216', quantity: 1, price: 4360 },
  { id: 'PRO1234325', image: 'pics/Shop4/217.png', name: 'Sample Cake 217', quantity: 1, price: 4385 },
  { id: 'PRO1234326', image: 'pics/Shop4/218.png', name: 'Sample Cake 218', quantity: 1, price: 4410 },
  { id: 'PRO1234327', image: 'pics/Shop4/219.png', name: 'Sample Cake 219', quantity: 1, price: 4435 },
  { id: 'PRO1234328', image: 'pics/Shop4/220.png', name: 'Sample Cake 220', quantity: 1, price: 4460 },
  { id: 'PRO1234329', image: 'pics/Shop5/221.png', name: 'Sample Cake 221', quantity: 1, price: 4470 },
  { id: 'PRO1234330', image: 'pics/Shop5/222.png', name: 'Sample Cake 222', quantity: 1, price: 4495 },
  { id: 'PRO1234331', image: 'pics/Shop5/223.png', name: 'Sample Cake 223', quantity: 1, price: 4520 },
  { id: 'PRO1234332', image: 'pics/Shop5/224.png', name: 'Sample Cake 224', quantity: 1, price: 4545 },
  { id: 'PRO1234333', image: 'pics/Shop5/225.png', name: 'Sample Cake 225', quantity: 1, price: 4570 },
  { id: 'PRO1234334', image: 'pics/Shop5/226.png', name: 'Sample Cake 226', quantity: 1, price: 4595 },
  { id: 'PRO1234335', image: 'pics/Shop5/227.png', name: 'Sample Cake 227', quantity: 1, price: 4620 },
  { id: 'PRO1234336', image: 'pics/Shop5/228.png', name: 'Sample Cake 228', quantity: 1, price: 4645 },
  { id: 'PRO1234337', image: 'pics/Shop5/229.png', name: 'Sample Cake 229', quantity: 1, price: 4670 },
  { id: 'PRO1234338', image: 'pics/Shop5/230.png', name: 'Sample Cake 230', quantity: 1, price: 4695 },
  { id: 'PRO1234339', image: 'pics/Shop5/231.png', name: 'Sample Cake 231', quantity: 1, price: 4720 },
  { id: 'PRO1234340', image: 'pics/Shop5/232.png', name: 'Sample Cake 232', quantity: 1, price: 4745 },
  { id: 'PRO1234341', image: 'pics/Shop5/233.png', name: 'Sample Cake 233', quantity: 1, price: 4770 },
  { id: 'PRO1234342', image: 'pics/Shop5/234.png', name: 'Sample Cake 234', quantity: 1, price: 4795 },
  { id: 'PRO1234343', image: 'pics/Shop5/235.png', name: 'Sample Cake 235', quantity: 1, price: 4820 },
  { id: 'PRO1234344', image: 'pics/Shop5/236.png', name: 'Sample Cake 236', quantity: 1, price: 4845 },
  { id: 'PRO1234345', image: 'pics/Shop5/237.png', name: 'Sample Cake 237', quantity: 1, price: 4870 },
  { id: 'PRO1234346', image: 'pics/Shop5/238.png', name: 'Sample Cake 238', quantity: 1, price: 4895 },
  { id: 'PRO1234347', image: 'pics/Shop5/239.png', name: 'Sample Cake 239', quantity: 1, price: 4920 },
  { id: 'PRO1234348', image: 'pics/Shop5/240.png', name: 'Sample Cake 240', quantity: 1, price: 4945 },
  { id: 'PRO1234349', image: 'pics/Shop5/241.png', name: 'Sample Cake 241', quantity: 1, price: 4970 },
  { id: 'PRO1234350', image: 'pics/Shop5/242.png', name: 'Sample Cake 242', quantity: 1, price: 4995 },
  { id: 'PRO1234351', image: 'pics/Shop5/243.png', name: 'Sample Cake 243', quantity: 1, price: 5020 },
  { id: 'PRO1234352', image: 'pics/Shop5/244.png', name: 'Sample Cake 244', quantity: 1, price: 5045 },
  { id: 'PRO1234353', image: 'pics/Shop5/245.png', name: 'Sample Cake 245', quantity: 1, price: 5070 },
  { id: 'PRO1234354', image: 'pics/Shop5/246.png', name: 'Sample Cake 246', quantity: 1, price: 5095 },
  { id: 'PRO1234355', image: 'pics/Shop5/247.png', name: 'Sample Cake 247', quantity: 1, price: 5120 },
  { id: 'PRO1234356', image: 'pics/Shop5/248.png', name: 'Sample Cake 248', quantity: 1, price: 5145 },
  { id: 'PRO1234357', image: 'pics/Shop5/249.png', name: 'Sample Cake 249', quantity: 1, price: 5170 },
  { id: 'PRO1234358', image: 'pics/Shop5/250.png', name: 'Sample Cake 250', quantity: 1, price: 5195 },
  { id: 'PRO1234359', image: 'pics/Shop5/251.png', name: 'Sample Cake 251', quantity: 1, price: 5220 },
  { id: 'PRO1234360', image: 'pics/Shop5/252.png', name: 'Sample Cake 252', quantity: 1, price: 5245 },
  { id: 'PRO1234361', image: 'pics/Shop5/253.png', name: 'Sample Cake 253', quantity: 1, price: 5270 },
  { id: 'PRO1234362', image: 'pics/Shop5/254.png', name: 'Sample Cake 254', quantity: 1, price: 5295 },
  { id: 'PRO1234363', image: 'pics/Shop5/255.png', name: 'Sample Cake 255', quantity: 1, price: 5320 },
  { id: 'PRO1234364', image: 'pics/Shop5/256.png', name: 'Sample Cake 256', quantity: 1, price: 5345 },
  { id: 'PRO1234365', image: 'pics/Shop5/257.png', name: 'Sample Cake 257', quantity: 1, price: 5370 },
  { id: 'PRO1234366', image: 'pics/Shop5/258.png', name: 'Sample Cake 258', quantity: 1, price: 5395 },
  { id: 'PRO1234367', image: 'pics/Shop5/259.png', name: 'Sample Cake 259', quantity: 1, price: 5420 },
  { id: 'PRO1234368', image: 'pics/Shop5/260.png', name: 'Sample Cake 260', quantity: 1, price: 5445 },
  { id: 'PRO1234369', image: 'pics/Shop5/261.png', name: 'Sample Cake 261', quantity: 1, price: 5470 },
  { id: 'PRO1234370', image: 'pics/Shop5/262.png', name: 'Sample Cake 262', quantity: 1, price: 5495 },
  { id: 'PRO1234371', image: 'pics/Shop5/263.png', name: 'Sample Cake 263', quantity: 1, price: 5520 },
  { id: 'PRO1234372', image: 'pics/Shop5/264.png', name: 'Sample Cake 264', quantity: 1, price: 5545 },
  { id: 'PRO1234373', image: 'pics/Shop5/265.png', name: 'Sample Cake 265', quantity: 1, price: 5570 },
  { id: 'PRO1234374', image: 'pics/Shop5/266.png', name: 'Sample Cake 266', quantity: 1, price: 5595 },
  { id: 'PRO1234375', image: 'pics/Shop5/267.png', name: 'Sample Cake 267', quantity: 1, price: 5620 },
  { id: 'PRO1234376', image: 'pics/Shop5/268.png', name: 'Sample Cake 268', quantity: 1, price: 5645 },
  { id: 'PRO1234377', image: 'pics/Shop5/269.png', name: 'Sample Cake 269', quantity: 1, price: 5670 },
  { id: 'PRO1234378', image: 'pics/Shop5/270.png', name: 'Sample Cake 270', quantity: 1, price: 5695 },
  { id: 'PRO1234379', image: 'pics/Shop5/271.png', name: 'Sample Cake 271', quantity: 1, price: 5720 },
  { id: 'PRO1234380', image: 'pics/Shop5/272.png', name: 'Sample Cake 272', quantity: 1, price: 5745 },
  { id: 'PRO1234381', image: 'pics/Shop5/273.png', name: 'Sample Cake 273', quantity: 1, price: 5770 },
  { id: 'PRO1234382', image: 'pics/Shop5/274.png', name: 'Sample Cake 274', quantity: 1, price: 5795 },
  { id: 'PRO1234383', image: 'pics/Shop5/275.png', name: 'Sample Cake 275', quantity: 1, price: 5820 },
  { id: 'PRO1234384', image: 'pics/Shop5/276.png', name: 'Sample Cake 276', quantity: 1, price: 5845 },
  { id: 'PRO1234385', image: 'pics/Shop5/277.png', name: 'Sample Cake 277', quantity: 1, price: 5870 },
  { id: 'PRO1234386', image: 'pics/Shop5/278.png', name: 'Sample Cake 278', quantity: 1, price: 5895 },
  { id: 'PRO1234387', image: 'pics/Shop5/279.png', name: 'Sample Cake 279', quantity: 1, price: 5920 },
  { id: 'PRO1234388', image: 'pics/Shop5/280.png', name: 'Sample Cake 280', quantity: 1, price: 5945 },
  { id: 'PRO1234389', image: 'pics/Shop5/281.png', name: 'Sample Cake 281', quantity: 1, price: 5970 },
  { id: 'PRO1234390', image: 'pics/Shop5/282.png', name: 'Sample Cake 282', quantity: 1, price: 5995 },
  { id: 'PRO1234391', image: 'pics/Shop5/283.png', name: 'Sample Cake 283', quantity: 1, price: 6020 },
  { id: 'PRO1234392', image: 'pics/Shop5/284.png', name: 'Sample Cake 284', quantity: 1, price: 6045 },
  { id: 'PRO1234393', image: 'pics/Shop5/285.png', name: 'Sample Cake 285', quantity: 1, price: 6070 },
  { id: 'PRO1234394', image: 'pics/Shop5/286.png', name: 'Sample Cake 286', quantity: 1, price: 6095 },
  { id: 'PRO1234395', image: 'pics/Shop5/287.png', name: 'Sample Cake 287', quantity: 1, price: 6120 },
  { id: 'PRO1234396', image: 'pics/Shop5/288.png', name: 'Sample Cake 288', quantity: 1, price: 6145 },
  { id: 'PRO1234397', image: 'pics/Shop5/289.png', name: 'Sample Cake 289', quantity: 1, price: 6170 },
  { id: 'PRO1234398', image: 'pics/Shop5/290.png', name: 'Sample Cake 290', quantity: 1, price: 6195 },
  { id: 'PRO1234399', image: 'pics/Shop5/291.png', name: 'Sample Cake 291', quantity: 1, price: 6220 },
  { id: 'PRO1234400', image: 'pics/Shop5/292.png', name: 'Sample Cake 292', quantity: 1, price: 6245 },
  { id: 'PRO1234401', image: 'pics/Shop5/293.png', name: 'Sample Cake 293', quantity: 1, price: 6270 },
  { id: 'PRO1234402', image: 'pics/Shop5/294.png', name: 'Sample Cake 294', quantity: 1, price: 6295 },
  { id: 'PRO1234403', image: 'pics/Shop5/295.png', name: 'Sample Cake 295', quantity: 1, price: 6320 },
  { id: 'PRO1234404', image: 'pics/Shop5/296.png', name: 'Sample Cake 296', quantity: 1, price: 6345 },
  { id: 'PRO1234405', image: 'pics/Shop5/297.png', name: 'Sample Cake 297', quantity: 1, price: 6370 },
  { id: 'PRO1234406', image: 'pics/Shop5/298.png', name: 'Sample Cake 298', quantity: 1, price: 6395 },
  { id: 'PRO1234407', image: 'pics/Shop5/299.png', name: 'Sample Cake 299', quantity: 1, price: 6420 },
  { id: 'PRO1234408', image: 'pics/Shop5/300.png', name: 'Sample Cake 300', quantity: 1, price: 6445 },
  { id: 'PRO1234409', image: 'pics/Shop5/301.png', name: 'Sample Cake 301', quantity: 1, price: 6470 },
  { id: 'PRO1234410', image: 'pics/Shop5/302.png', name: 'Sample Cake 302', quantity: 1, price: 6495 },
  { id: 'PRO1234411', image: 'pics/Shop5/303.png', name: 'Sample Cake 303', quantity: 1, price: 6520 },
  { id: 'PRO1234412', image: 'pics/Shop5/304.png', name: 'Sample Cake 304', quantity: 1, price: 6545 },
  { id: 'PRO1234413', image: 'pics/Shop5/305.png', name: 'Sample Cake 305', quantity: 1, price: 6570 },
  { id: 'PRO1234414', image: 'pics/Shop5/306.png', name: 'Sample Cake 306', quantity: 1, price: 6595 },
  { id: 'PRO1234415', image: 'pics/Shop5/307.png', name: 'Sample Cake 307', quantity: 1, price: 6620 },
  { id: 'PRO1234416', image: 'pics/Shop5/308.png', name: 'Sample Cake 308', quantity: 1, price: 6645 },
  { id: 'PRO1234417', image: 'pics/Shop5/309.png', name: 'Sample Cake 309', quantity: 1, price: 6670 },
  { id: 'PRO1234418', image: 'pics/Shop5/310.png', name: 'Sample Cake 310', quantity: 1, price: 6695 },
  { id: 'PRO1234419', image: 'pics/Shop5/311.png', name: 'Sample Cake 311', quantity: 1, price: 6720 },
  { id: 'PRO1234420', image: 'pics/Shop5/312.png', name: 'Sample Cake 312', quantity: 1, price: 6745 },
  { id: 'PRO1234421', image: 'pics/Shop5/313.png', name: 'Sample Cake 313', quantity: 1, price: 6770 },
  { id: 'PRO1234422', image: 'pics/Shop5/314.png', name: 'Sample Cake 314', quantity: 1, price: 6795 },
  { id: 'PRO1234423', image: 'pics/Shop5/315.png', name: 'Sample Cake 315', quantity: 1, price: 6820 },
  { id: 'PRO1234424', image: 'pics/Shop5/316.png', name: 'Sample Cake 316', quantity: 1, price: 6845 },
  { id: 'PRO1234425', image: 'pics/Shop5/317.png', name: 'Sample Cake 317', quantity: 1, price: 6870 },
  { id: 'PRO1234426', image: 'pics/Shop5/318.png', name: 'Sample Cake 318', quantity: 1, price: 6895 },
  { id: 'PRO1234427', image: 'pics/Shop5/319.png', name: 'Sample Cake 319', quantity: 1, price: 6920 }


  
  
  // Continue adding up to 330 products
];

const itemsPerPage = 33;
let currentPage = 1;

function renderProducts() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedProducts = products.slice(start, end);
  
  let productsHTML = '';
  paginatedProducts.forEach((product) => {
    productsHTML += `
      <div class="pro" data-product-id="${product.id}" data-product-name="${product.name}" 
           data-product-img="${product.image}" data-product-price="${product.price}" data-product-quantity="1">
        <img src="${product.image}" alt="">
        <div class="des">
          <h5>${product.name}</h5>
          <div class="star">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <h4>₹ ${product.price}</h4>
        </div>
        <div class="js-add-to-cart cart" data-product-id="${product.id}" data-product-name="${product.name}"
             data-product-img="${product.image}" data-product-price="${product.price}" data-product-quantity="1">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-pro-cont').innerHTML = productsHTML;
  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(products.length / itemsPerPage);
  let paginationHTML = '';
  
  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<a href="#" onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>${i}</a>`;
  }
  
  document.querySelector('#pagenavi').innerHTML = paginationHTML;
}

function changePage(page) {
  currentPage = page;
  renderProducts();
}

renderProducts();
