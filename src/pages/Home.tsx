import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-20 py-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-slate-900 mb-12">
        <div className="absolute inset-0 opacity-60">
          <img
            className="w-full h-full object-cover"
            alt="High-end fashion items collection background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbNR0-583LQXHLv7aCQTNBLDXJCVO8uV_lM_vyjmbbz5NLDZKbbu1GzFBpa_EClwTL7SC_xcZo35qcjtQcfEP-e9KRxEIs9aJ9ncXlqSMTBXhYntYlDAsMuFhV45sxWlkT8P5aQi6h43VebXhv1UcfhUx0sG6IvcCfIPAtu-qXHaVz6nVOXQ36oIw5PYZD2a5WeUm5Vruuq4b2lC3v6BgyZvxRDrjZR0ceokH-OVpbD3XGQBubbYeUTAVBgqBmh4D6c32VqBh7D7T6"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative z-10 p-8 md:p-16 flex flex-col items-start max-w-xl">
          <span className="bg-primary px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest mb-4">Curated for you</span>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
            Your next favorite find is here
          </h1>
          <p className="text-slate-200 text-base md:text-lg mb-8 leading-relaxed">
            Discover the latest second-hand treasures curated just for your style. Sustainably sourced from closets around the world.
          </p>
          <Link to="/catalog" className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-base hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-xl">
            Shop Discovery Stream
          </Link>
        </div>
      </div>

      {/* Feed Categories */}
      <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <button className="whitespace-nowrap px-4 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-md">All items</button>
        <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-800 border border-primary/10 rounded-full text-sm font-semibold hover:border-primary/40 transition-all">Designer brands</button>
        <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-800 border border-primary/10 rounded-full text-sm font-semibold hover:border-primary/40 transition-all">Vintage 90s</button>
        <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-800 border border-primary/10 rounded-full text-sm font-semibold hover:border-primary/40 transition-all">Streetwear</button>
        <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-800 border border-primary/10 rounded-full text-sm font-semibold hover:border-primary/40 transition-all">Minimalist</button>
        <button className="whitespace-nowrap px-4 py-2 bg-white dark:bg-slate-800 border border-primary/10 rounded-full text-sm font-semibold hover:border-primary/40 transition-all">Activewear</button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold tracking-tight">New arrivals</h2>
        <Link className="text-primary text-sm font-bold flex items-center gap-1 hover:underline" to="/catalog">
          View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      {/* Item Grid (4:5 Aspect Ratio) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {/* Item 1 */}
        <Link to="/product/1" className="flex flex-col group cursor-pointer">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-3 bg-slate-100 dark:bg-slate-800">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Stylish beige trench coat on hanger"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWdVV8RSYxNGPiG4UVqDbAollIVKkqY8midIZX5ODJnzxmL-MDZGFlvdp-kdrofcC5XSWTzy1m1hn8ll1kc7cU27rbC9pPPmbD3XMKKQVJ6SBPT1w4fbcgHh8KJIA_U-m__-W9Hd5mxnqdmQCOkqBQiaXb7JJVodDXJlLSsa64tP60HldySDpps6yHmSLIs-2p9Bw9yBX6msYTSEVS-BKFMR8zlFhef2j6sUTX5bsrh7m4MeE956fBTqlI78kPFJxTbXtjc943ytAN"
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-900 hover:text-red-500 shadow-sm transition-colors" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined text-[20px]">favorite</span>
            </button>
          </div>
          <div className="flex flex-col px-1">
            <div className="flex justify-between items-start mb-0.5">
              <p className="text-slate-900 dark:text-slate-100 text-lg font-bold">€45.00</p>
              <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold uppercase">New</span>
            </div>
            <p className="text-primary/70 dark:text-primary/60 text-xs font-semibold mb-1">Incl. €3.20 fee</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm truncate font-medium">Zara • Beige Trench • M</p>
          </div>
        </Link>

        {/* Item 2 */}
        <Link to="/product/2" className="flex flex-col group cursor-pointer">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-3 bg-slate-100 dark:bg-slate-800">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Red Nike running sneakers"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC56uoB_KGndR5MfZHugznBWuhOGrqU4GjtYSRLgqbAKGD7WY5cdN9UHkSj8l869_gMIpdsdAi8URendLSLuEeJs29co8uMiDDC9jqEf-nxx8C5xHdxzRulyeXxpSG8S8M42i6Y7IJ9lRnBzFJPXND84tFfm61Osb-sma0uxVovnq6mE--zWhmCs1otjipX2DjJMzOuhf0bF7HDxKFPSyC7yShGynak3UKRaCKS-27xdPBD21uGfqqOhBvYZdRAygd_azCyelNENdUq"
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-900 hover:text-red-500 shadow-sm transition-colors" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined text-[20px]">favorite</span>
            </button>
          </div>
          <div className="flex flex-col px-1">
            <p className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-0.5">€110.00</p>
            <p className="text-primary/70 dark:text-primary/60 text-xs font-semibold mb-1">Incl. €8.15 fee</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm truncate font-medium">Nike • Air Max • 42</p>
          </div>
        </Link>

        {/* Item 3 */}
        <Link to="/product/3" className="flex flex-col group cursor-pointer">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-3 bg-slate-100 dark:bg-slate-800">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Vintage graphic t-shirt in white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnKvBz7d9DPU5p0QjsdR96B8i2aSL1RW9RLzI4qfm1a0HGNMvga5LGaOvdiZ0keroq662BPNT2QDetFZAZWBKrOYp4ajd64zy5pvJzZkMZbGhDzJIr50mPAoSk3Rw8S-CyuEl4xQd52WI4XMDqfyEv1mleHQOHi8yh3Vytn4zMvRm0ctGNFbweDqGot_82Mk3anVA6nlG7O6Z-ilwswmoarGDUDFobWthaoaTTjTR5u05Q4oshZzFV0kIIfq46vZuASV_FGcW3J3fm"
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-900 hover:text-red-500 shadow-sm transition-colors" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined text-[20px]">favorite</span>
            </button>
          </div>
          <div className="flex flex-col px-1">
            <p className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-0.5">€15.00</p>
            <p className="text-primary/70 dark:text-primary/60 text-xs font-semibold mb-1">Incl. €1.10 fee</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm truncate font-medium">Vintage • Graphic Tee • L</p>
          </div>
        </Link>

        {/* Item 4 */}
        <Link to="/product/4" className="flex flex-col group cursor-pointer">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-3 bg-slate-100 dark:bg-slate-800">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Classic leather jacket on background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDUuGaQVrG8terJ95SH5lkza6RRb8xVxijjwF4PJQLMzOE_0sgwSknkgmAUJMfwPkd9ArWqo7KNqIFMVKLPyvuB-dvn9ut-wxl8aNfAejEiPEY-WFYdlSy-CKMe2LM_A6wpEUqdn1Dqt5JMrOkwKJB_yQWB9rMgKUxfxdog32r041HVWonF6Lhiky7kpvjlbD0P5oImQNICa5vUIqoGf9wifXQnTTmmlCmQ4YANTMZzyK97-1kfnBppEV19i6NiSBU8cdGskylqIlX"
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-900 hover:text-red-500 shadow-sm transition-colors" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined text-[20px]">favorite</span>
            </button>
          </div>
          <div className="flex flex-col px-1">
            <p className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-0.5">€85.00</p>
            <p className="text-primary/70 dark:text-primary/60 text-xs font-semibold mb-1">Incl. €6.00 fee</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm truncate font-medium">AllSaints • Leather • S</p>
          </div>
        </Link>

        {/* Item 5 */}
        <Link to="/product/5" className="flex flex-col group cursor-pointer">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-3 bg-slate-100 dark:bg-slate-800">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Dark blue denim jeans detail"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJUNjeZEMYU42h7paUkQsVaCDmLC5UVcLLfyGn4d72H75527mB9MnkhLEWD-0eni_TVcruwK3vNxigQuqOuUHDZYNlzzzcov7Jr5EDmRdWR5s5rJXIBJcZY3rUmkH3H5j3i85UqYuNTKHzNIeNA5k2tDTyrAKr-bCQoQHHIeacHWOdvyE0UI3iIhm9WKzh316Dr4UQ_-IKAKqGkAv78dXpTfCRL5fdtI4RicNe__JUdhJvftXgn670qPDzFKhFPsqy4lGXKNGe9mlM"
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-900 hover:text-red-500 shadow-sm transition-colors" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined text-[20px]">favorite</span>
            </button>
          </div>
          <div className="flex flex-col px-1">
            <p className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-0.5">€28.00</p>
            <p className="text-primary/70 dark:text-primary/60 text-xs font-semibold mb-1">Incl. €2.10 fee</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm truncate font-medium">Levi's • 501 Blue • 32</p>
          </div>
        </Link>

        {/* Item 6 */}
        <Link to="/product/6" className="flex flex-col group cursor-pointer">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-3 bg-slate-100 dark:bg-slate-800">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Minimalist wrist watch product photo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe20iqfMH49xwHEUjBPrassE6E_anW_slkj6oNFkHiC47A7QRMNxteOooSR0aD6YznOQB6x04nw1BnCeJomM6zaGLQHUsLGQpPiDNe_zjDz8mShQPpViRmEBMuVVQdMhwdGWXE5NZXNR43WHv-WaD5ExOqg6VWIsAuCY4dIKyRrh5TIN_ScCdJZi3mHM9Pi8Mpbfn9Dxs9j8Pt0AgRDajVGagQ6bdWb7QfcsnbzsyhLeypcnc2i6EV_w4QIUEYvmzi81B8qWVM-dAF"
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-900 hover:text-red-500 shadow-sm transition-colors" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined text-[20px]">favorite</span>
            </button>
          </div>
          <div className="flex flex-col px-1">
            <p className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-0.5">€120.00</p>
            <p className="text-primary/70 dark:text-primary/60 text-xs font-semibold mb-1">Incl. €9.00 fee</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm truncate font-medium">Seiko • Classic • One Size</p>
          </div>
        </Link>
      </div>

      {/* Load More Section */}
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm">You've reached the end of the recent additions</p>
        <Link to="/catalog" className="flex items-center gap-2 bg-primary/10 text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all">
          Discover more <span className="material-symbols-outlined">expand_more</span>
        </Link>
      </div>

      {/* Trust Badges Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-primary/10 mt-8">
        <div className="flex flex-col items-center text-center px-4">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">verified_user</span>
          <h3 className="text-lg font-bold mb-2">Safe shopping</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Our Buyer Protection covers your purchase from payment to delivery.</p>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">local_shipping</span>
          <h3 className="text-lg font-bold mb-2">Easy shipping</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Print your prepaid label and drop your parcel at a point near you.</p>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">eco</span>
          <h3 className="text-lg font-bold mb-2">Sustainable choice</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Give clothes a second life and reduce your fashion footprint.</p>
        </div>
      </div>
    </main>
  );
}
