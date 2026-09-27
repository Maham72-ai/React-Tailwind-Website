import { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Khaadi Embroidered Lawn Suit', price: 4500, cat: 'Women', img: 'https://i.pinimg.com/1200x/d8/c8/08/d8c808f41754531efa037de41ed89800.jpg', desc: 'Premium 3-piece embroidered lawn with chiffon dupatta.', longDesc: 'This beautiful Khaadi lawn suit is made with pure lawn fabric. Comes with embroidered shirt, plain trouser and printed dupatta. Ideal for eid.' },
  { id: 2, name: 'White Chicken Kari Kurta', price: 3200, cat: 'Women', img: 'https://i.pinimg.com/736x/32/e4/84/32e4842d5d885cc5f86051007c122080.jpg', desc: 'Classic white chicken kari kurta with lace work.', longDesc: 'Simple and elegant white chicken kari kurta made with cotton. Lace detailing on daman and sleeves.' },
  { id: 3, name: 'Black Lawn Frock', price: 4800, cat: 'Women', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMiPEr1MMfywiaHb9l1cb_jW3SjpITCne-OWUS7r67v_RJ1lxlVx7bKVK&s=10', desc: 'Black embroidered frock for formal wear.', longDesc: 'Black lawn frock with heavy embroidery on neck and sleeves. Perfect for dinner.' },
  { id: 4, name: 'Gents White Kurta Shalwar', price: 3500, cat: 'Men', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBHVBMEXn1jTCyFpFP6LmwFp4LoKvFkCSNk-8qwo9LpAlK_JV8G2adq5o&s=10', desc: 'Pure cotton white kurta shalwar for men.', longDesc: 'Traditional gents white kurta shalwar stitched with premium cotton. Comfortable for eid namaz.' },
  { id: 5, name: 'Kids Kurta Shalwar', price: 3800, cat: 'Men', img: 'https://i.pinimg.com/736x/28/91/db/2891dbe6c9e0500f4df8fbaf3da3ea63.jpg', desc: 'Stylish black kurta shalwar for mehndi.', longDesc: 'Modern black kurta shalwar with buttons detailing. Perfect for formal events.' },
  { id: 6, name: 'Peshawari men Chappal Brown', price: 2800, cat: 'Footwear', img: 'https://i.pinimg.com/1200x/1c/46/5c/1c465cdec5b94619076c7023e951e515.jpg', desc: 'Original leather Peshawari chappal handmade.', longDesc: 'Handmade in Peshawar with pure leather. Durable and comfortable.' },
  { id: 7, name: 'Multani Khussa Red', price: 1600, cat: 'Footwear', img: 'https://i.pinimg.com/1200x/83/39/07/8339076c5a9e591e78ac130fc6390664.jpg', desc: 'Hand embroidered traditional khussa.', longDesc: 'Beautiful red khussa with zari work. Made by local artisans of Multan.' },
  { id: 8, name: 'Sindhi Ajrak Shawl', price: 1950, cat: 'Women', img: 'https://i.pinimg.com/1200x/e6/c1/40/e6c140f1482aba596407919f42fea2f9.jpg', desc: 'Original Sindhi ajrak shawl natural dyes.', longDesc: 'Traditional Sindhi ajrak made with natural dyes. Soft and warm.' },
  { id: 9, name: 'Lawn Maxi - Floral Print', price: 5000, cat: 'Women', img: 'https://i.pinimg.com/736x/0a/ef/7a/0aef7ae1436707f9f25ef6903cb120b8.jpg', desc: 'Long maxi dress for girls.', longDesc: 'Stylish maxi dress for girls. Floral printed lawn fabric.' },
  { id: 10, name: 'Embroidered Net Dupatta', price: 1200, cat: 'Women', img: 'https://i.pinimg.com/1200x/00/fc/0c/00fc0cb44f37ed6d4aa9578e9ace1388.jpg', desc: 'Fancy net dupatta with embroidery.', longDesc: 'Heavy embroidered net dupatta perfect for wedding wear.' },
  { id: 11, name: 'Multani Sohan Halwa', price: 1500, cat: 'Food', img: 'https://static-01.daraz.pk/p/b3c205da2a9ca01b1663973672a462f8.png', desc: 'Fresh cream chocolate cake from Layers.', longDesc: 'Delicious chocolate fudge cake freshly baked. Perfect for birthdays.' },
  { id: 12, name: 'Jhumka & Tikka Set', price: 750, cat: 'Jewellery', img: 'https://i.pinimg.com/1200x/93/7f/57/937f571d837111383263daf6461b1187.jpg', desc: 'Gold plated jhumka with tikka.', longDesc: 'Beautiful jhumka earrings pair with tikka. Perfect match with lawn suits.' },
];

function Navbar({ cartCount }){
  return(
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-700">PakBazaar<span className="text-black">.pk</span></Link>
        <div className="flex gap-6 items-center text-sm font-medium">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/products" className="hover:text-green-700">Products</Link>
          <Link to="/about" className="hover:text-green-700">About</Link>
          <Link to="/products" className="relative">
            <span className="bg-black text-white px-3 py-1 rounded-full">Cart ({cartCount})</span>
          </Link>
          <Link to="/login" className="border px-4 py-1.5 rounded-full">Login</Link>
          <Link to="/register" className="bg-green-700 text-white px-4 py-1.5 rounded-full">Register</Link>
        </div>
      </div>
    </nav>
  )
}

function Home(){
  return(
    <div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-700 font-semibold text-sm uppercase tracking-widest">Pakistani Fashion Store</p>
            <h1 className="text-5xl font-bold mt-3 leading-[1.1]">Discover<br/>Pakistani Culture<br/> & Fashion</h1>
            <p className="text-gray-600 mt-5">We bring authentic Pakistani dresses, footwear and accessories from local artisans of Lahore, Karachi, Multan and Peshawar to your doorstep.</p>
            <div className="flex gap-3 mt-8">
              <Link to="/products" className="bg-black text-white px-7 py-3 rounded-full text-sm">Shop Collection</Link>
              <Link to="/about" className="border px-7 py-3 rounded-full text-sm">Our Vision</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://www.london.ac.uk/sites/default/files/styles/uncropped_large/public/2025-10/pakistani%20culture.jpg?itok=Y-dQQmyChttps://www.london.ac.uk/sites/default/files/styles/uncropped_large/public/2025-10/pakistani%20culture.jpg?itok=Y-dQQmyC" className="rounded-2xl h-64 w-full object-cover" alt=""/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSGJz1CkVzrB5fIo3M0P-p9nCKaGMsKPkVkf7zD7vQA&s=10" className="rounded-2xl h-64 w-full object-cover mt-8" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductsPage({ addToCart }){
  const [cat, setCat] = useState('All');
  const cats = ['All','Women','Men','Footwear','Jewellery','Food','Bags'];
  const filtered = cat==='All' ? allProducts : allProducts.filter(p=>p.cat===cat);
  return(
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Our Collection ({filtered.length})</h2>
        <p className="text-sm text-gray-500">Click on product to view details</p>
      </div>
      <div className="flex gap-2 mt-6 flex-wrap">
        {cats.map(c=>(
          <button key={c} onClick={()=>setCat(c)} className={`px-5 py-2 rounded-full text-sm border transition ${cat===c ? 'bg-black text-white' : 'bg-white hover:bg-gray-50'}`}>{c}</button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filtered.map(p=>(
          <Link key={p.id} to={`/product/${p.id}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition group">
            <div className="overflow-hidden">
              <img src={p.img} className="h-56 w-full object-cover group-hover:scale-105 transition duration-500" alt={p.name} />
            </div>
            <div className="p-4">
              <span className="text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded-full">{p.cat}</span>
              <h3 className="font-semibold text-sm mt-2 line-clamp-1">{p.name}</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-1">{p.desc}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold">Rs. {p.price}</span>
                <button onClick={(e)=>{e.preventDefault(); addToCart(p);}} className="text-xs bg-black text-white px-3 py-1.5 rounded-full hover:bg-gray-800">Add to Cart</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function ProductDetail({ addToCart }){
  const { id } = useParams();
  const product = allProducts.find(p=>p.id==id);
  const navigate = useNavigate();
  if(!product) return <div className="p-10">Product not found</div>
  return(
    <div className="max-w-6xl mx-auto px-4 py-12">
      <button onClick={()=>navigate(-1)} className="text-sm mb-6">← Back to Products</button>
      <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-3xl border">
        <img src={product.img} className="w-full h-[500px] object-cover rounded-2xl" alt={product.name} />
        <div>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">{product.cat}</span>
          <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
          <p className="text-2xl font-bold text-green-700 mt-3">Rs. {product.price}</p>
          <p className="text-gray-600 mt-4 leading-6">{product.longDesc}</p>
          <div className="mt-8 space-y-3">
            <div className="flex gap-2 text-sm"><span className="font-semibold">✓</span> Free Delivery All Pakistan</div>
            <div className="flex gap-2 text-sm"><span className="font-semibold">✓</span> Cash on Delivery Available</div>
            <div className="flex gap-2 text-sm"><span className="font-semibold">✓</span> 7 Days Return Policy</div>
          </div>
          <div className="flex gap-3 mt-8">
            <button onClick={()=>addToCart(product)} className="flex-1 bg-black text-white py-3 rounded-full">Add to Cart</button>
            <button onClick={()=>{addToCart(product); navigate('/products');}} className="flex-1 border py-3 rounded-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function About(){
  return(
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold">About PakBazaar.pk</h1>
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <p className="text-gray-700 leading-7">
            PakBazaar.pk is a Pakistani e-commerce platform built with React and Tailwind CSS. Our goal is to promote authentic Pakistani fashion and culture to the world.
          </p>
          <h3 className="font-bold mt-8 text-lg">Our Vision</h3>
          <p className="text-gray-600 mt-2 leading-7">
            Our vision is to become Pakistan's most trusted online marketplace for traditional clothing. We want to empower local artisans from Faisalabad, Multan, Karachi and Peshawar by giving their handmade products a digital platform. We believe in preserving Pakistani heritage through fashion - from Khadi to Lawn, from Peshawari Chappal to Lahori Khussa.
            <br/><br/>
            We focus on affordable pricing, original products, and fast delivery across Pakistan.
          </p>
        </div>
        <div className="space-y-4">
          <div className="border rounded-2xl p-6 bg-white">
            <h4 className="font-bold">Why Choose Us?</h4>
            <ul className="text-sm text-gray-600 mt-3 space-y-2 list-disc ml-4">
              <li>100% Original Pakistani Products</li>
              <li>Cash on Delivery All Over Pakistan</li>
              <li>Support Local Artisans</li>
              <li>Easy Returns and Exchange</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-6 bg-green-50">
            <h4 className="font-bold">Our Location</h4>
            <p className="text-sm text-gray-600 mt-2">Faisalabad, Punjab, Pakistan<br/>Email: support@pakbazaar.pk<br/>Phone: 0300-1234567</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Login(){
  const navigate = useNavigate();
  return(
    <div className="min-h-[70vh] flex justify-center items-center px-4">
      <form onSubmit={(e)=>{e.preventDefault(); navigate('/');}} className="w-full max-w-sm border rounded-2xl p-8 bg-white shadow-sm">
        <h2 className="text-2xl font-bold">Welcome Back</h2>
        <p className="text-sm text-gray-500 mt-1">Login to your PakBazaar account</p>
        <input type="email" required placeholder="Enter your email" className="w-full mt-6 border px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-black" />
        <input type="password" required placeholder="Enter password" className="w-full mt-3 border px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-black" />
        <button className="w-full mt-6 bg-black text-white py-3 rounded-xl">Login</button>
        <p className="text-xs mt-4 text-center">Don't have account? <Link to="/register" className="font-semibold">Create one</Link></p>
      </form>
    </div>
  )
}

function Register(){
  const navigate = useNavigate();
  return(
    <div className="min-h-[70vh] flex justify-center items-center px-4">
      <form onSubmit={(e)=>{e.preventDefault(); navigate('/login');}} className="w-full max-w-sm border rounded-2xl p-8 bg-white shadow-sm">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <p className="text-sm text-gray-500 mt-1">Join PakBazaar family</p>
        <input type="text" required placeholder="Full Name" className="w-full mt-6 border px-4 py-2.5 rounded-xl text-sm" />
        <input type="email" required placeholder="Email" className="w-full mt-3 border px-4 py-2.5 rounded-xl text-sm" />
        <input type="password" required placeholder="Password" className="w-full mt-3 border px-4 py-2.5 rounded-xl text-sm" />
        <button className="w-full mt-6 bg-black text-white py-3 rounded-xl">Register</button>
        <p className="text-xs mt-4 text-center">Already have account? <Link to="/login" className="font-semibold">Login</Link></p>
      </form>
    </div>
  )
}

export default function App(){
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState('');
  
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    setToast(`${product.name} added to cart!`);
    setTimeout(()=>setToast(''), 2000);
  };

  return(
    <div className="bg-[#fafafa] min-h-screen relative">
      <Navbar cartCount={cart.length} />
      {toast && <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm z-[100] shadow-lg animate-bounce">{toast}</div>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductsPage addToCart={addToCart}/>} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <footer className="text-center py-8 text-xs text-gray-400 border-t mt-16 bg-white">© 2026 PakBazaar.pk - Made with Love in Pakistan</footer>
    </div>
  )
}
