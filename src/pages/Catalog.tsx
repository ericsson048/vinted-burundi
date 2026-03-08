import { Link } from 'react-router-dom';

export default function Catalog() {
  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-10 py-6 w-full">
      {/* Breadcrumbs & Title */}
      <div className="mb-6">
        <nav className="flex text-xs text-slate-500 mb-2 gap-2">
          <Link className="hover:underline" to="/">Home</Link>
          <span>/</span>
          <a className="hover:underline" href="#">Women</a>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-100 font-medium">Clothes</span>
        </nav>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Women's clothes</h2>
            <p className="text-sm text-slate-500 mt-1">1,245,890 items found</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium">
              <span className="material-symbols-outlined text-sm">swap_vert</span>
              Sort: Relevance
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="w-64 flex-shrink-0 hidden lg:block">
          <div className="flex flex-col gap-6 sticky top-24">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 className="font-bold text-lg">Filters</h3>
              <button className="text-primary text-xs font-bold hover:underline">Clear all</button>
            </div>

            {/* Filter Group: Category */}
            <div className="group">
              <div className="flex items-center justify-between cursor-pointer mb-3">
                <span className="font-semibold text-sm">Category</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  <span className="text-sm">Dresses</span>
                </div>
                <div className="flex items-center gap-2">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  <span className="text-sm">Tops & T-shirts</span>
                </div>
                <div className="flex items-center gap-2">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  <span className="text-sm">Coats & Jackets</span>
                </div>
              </div>
            </div>

            {/* Filter Group: Size */}
            <div className="group">
              <div className="flex items-center justify-between cursor-pointer mb-3">
                <span className="font-semibold text-sm">Size</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button className="border border-slate-200 dark:border-slate-700 py-1 text-xs rounded hover:border-primary">XS</button>
                <button className="border border-primary bg-primary/5 py-1 text-xs rounded text-primary font-bold">S</button>
                <button className="border border-slate-200 dark:border-slate-700 py-1 text-xs rounded hover:border-primary">M</button>
                <button className="border border-slate-200 dark:border-slate-700 py-1 text-xs rounded hover:border-primary">L</button>
                <button className="border border-slate-200 dark:border-slate-700 py-1 text-xs rounded hover:border-primary">XL</button>
              </div>
            </div>

            {/* Filter Group: Brand */}
            <div className="group">
              <div className="flex items-center justify-between cursor-pointer mb-3">
                <span className="font-semibold text-sm">Brand</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
              <div className="relative mb-3">
                <input className="w-full text-xs py-1.5 pl-8 bg-slate-100 border-none rounded focus:ring-primary" placeholder="Search brand" type="text" />
                <span className="material-symbols-outlined absolute left-2 top-1.5 text-slate-400 text-sm">search</span>
              </div>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                <div className="flex items-center gap-2">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  <span className="text-sm">Zara</span>
                </div>
                <div className="flex items-center gap-2">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  <span className="text-sm">Nike</span>
                </div>
                <div className="flex items-center gap-2">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  <span className="text-sm">H&M</span>
                </div>
              </div>
            </div>

            {/* Filter Group: Price */}
            <div className="group">
              <div className="flex items-center justify-between cursor-pointer mb-3">
                <span className="font-semibold text-sm">Price</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
              <div className="flex items-center gap-2">
                <input className="w-full text-xs py-1.5 bg-slate-100 border-none rounded focus:ring-primary" placeholder="Min" type="number" />
                <span className="text-slate-400 text-xs">—</span>
                <input className="w-full text-xs py-1.5 bg-slate-100 border-none rounded focus:ring-primary" placeholder="Max" type="number" />
              </div>
            </div>

            {/* Filter Group: Condition */}
            <div className="group">
              <div className="flex items-center justify-between cursor-pointer mb-3">
                <span className="font-semibold text-sm">Condition</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  <span className="text-sm">New with tags</span>
                </div>
                <div className="flex items-center gap-2">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  <span className="text-sm">Excellent</span>
                </div>
                <div className="flex items-center gap-2">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  <span className="text-sm">Very good</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sorting & Tags (Mobile/Desktop) */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
              Size: S <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
            </span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
              Women <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {/* Product Card 1 */}
            <Link to="/product/1" className="group cursor-pointer">
              <div className="mb-2 flex items-center gap-2 px-1">
                <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Avatar of female user seller profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxIjsadVc-MrtOKTaxQvWN4aZpmMAQB5Rq_aR-6IfvJVfLHL9McPvGMisfCVf53tzzgN04LMdkIz7fjVhU_zO-7jx5YBUWrK65dGNVrPOzcwTv8O8pjCg4onMC3dfoU0DAN3gt3OppcZDXX2832VJck46Y69r7ShOBy-axHstRqHN2j8OQf3zaziKy01itJ5kCjfYEA4zhSTPGAnmROUMrrQTH0GeyW_GNwuLaIgLdR-SlpoyJzW92xrZaeDjZ9sFU-aDttvhSMvcb" referrerPolicy="no-referrer" />
                </div>
                <span className="text-xs text-slate-600 font-medium">claire_store</span>
              </div>
              <div className="relative aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden mb-3">
                <img alt="Floral aesthetic dress on a wooden hanger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAddWTTWM5fu5SyW_Onc_YM3pWvSd49GcOfcgfaw0AUS4zcmS9WjGprtD0YQlyWBYZAhqLhkeP74ZVthlNAtorsWCONiZGf-h-5B5cjvcMDwWCi0ecmVSx2A2uDyywHeJ7oWf-0xKNJWSaDwCbsMhy1bduZ3heQP8tDyqF5-F7mrbM4tzb4eTOFH8FB7MKjt1ZrvoccEtHtLfpehXheRoe7XNh2CIDo_T6HhDMMtKItqN-XMH_KGXDMuL63-HohgqNARsmMwFbwuuPt" referrerPolicy="no-referrer" />
                <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full text-slate-900 hover:text-red-500 transition-colors" onClick={(e) => e.preventDefault()}>
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="space-y-0.5">
                <p className="text-lg font-bold">12.00 €</p>
                <p className="text-[11px] text-slate-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
                  14.50 € incl. Buyer Protection
                </p>
                <p className="text-xs text-slate-400">S / Zara / Excellent</p>
              </div>
            </Link>

            {/* Product Card 2 */}
            <Link to="/product/2" className="group cursor-pointer">
              <div className="mb-2 flex items-center gap-2 px-1">
                <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Avatar of male user profile picture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwQjQDejIZ3sL9lySLgALhYEhGkTWu22VtiJG9dWgQL6aB816_M5JFOsfVvhikv-2yh4JWlLdyIg7fCxwtM0R6xptyNFXRahvnEq0kGFg_Ib5jDCZnPz7R3OfGj4iciroKsVUXreEp2eNS9tC5VbXraElfeePiepsKdYy_5nupcraubTMqlt0CE4kSBMoNpXHRtOmFytzSqwikdBz5L6i5qMa4gCpGf_PDaFKfNC__yLVii7gZGBzfTTs0yQWNnsv48x7CERX3cO7i" referrerPolicy="no-referrer" />
                </div>
                <span className="text-xs text-slate-600 font-medium">vintage_vibes</span>
              </div>
              <div className="relative aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden mb-3">
                <img alt="Vintage oversized brown leather jacket photo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGydCYqO6b2kMbU1vGCZon0_9mL5m-tfeIFmTCJMfXKON7iXt3a3qhDA5XszyXokNHmv8JdqeiVcY76z9RUVQmkdY35MOdKp1uT9DPWqa-IAMn_d6QVHNG8IU3UHpZBBngQYgsDZa8MetOitMnp54z7QV3oAahP8eWt3g3XaIxn8uwTKNG1uU3rdnGvdJCPIZNssoac1RG9t0eEWpoUT9lJmb9fFGvCGQN4pNuXSW1WJ5pyYz3ibRFEfAVV8VBFWy0HONrhjGQuyXR" referrerPolicy="no-referrer" />
                <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full text-slate-900 hover:text-red-500 transition-colors" onClick={(e) => e.preventDefault()}>
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
                <span className="absolute bottom-2 left-2 bg-white text-[10px] font-bold px-1.5 py-0.5 rounded text-primary">RARE</span>
              </div>
              <div className="space-y-0.5">
                <p className="text-lg font-bold">45.00 €</p>
                <p className="text-[11px] text-slate-500">48.20 € incl. Buyer Protection</p>
                <p className="text-xs text-slate-400">M / Vintage / Good</p>
              </div>
            </Link>

            {/* Product Card 3 */}
            <Link to="/product/3" className="group cursor-pointer">
              <div className="mb-2 flex items-center gap-2 px-1">
                <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Profile picture of a female seller smiling" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW8d0VOpyxZrqNcJPoaXCoUwG4v51EhzYC3ygbUoXtRJiCypB79N5kVvvuN9rBR4vs77uMj8Hu9P-q0QRykEMWI9EOFBllZmG5T9Ds5SpU1ly-sEeAjIp5FUvbFLFfJc_Bx49pFrz_tzncHnZovDDLkFObHC2PLe5QdCuQ36qC4dMybB7BOMl4x-uSkLEUOLODursx5FKGXlb4LoKPqDPoP3jNZxjBcVNnz8HIxqovABo1FPGn-OPPYAq43e6djxrTc4Ktr7c9wySv" referrerPolicy="no-referrer" />
                </div>
                <span className="text-xs text-slate-600 font-medium">julia_wardrobe</span>
              </div>
              <div className="relative aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden mb-3">
                <img alt="Blue denim jeans folded on a flat surface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzBeB-am7fLYfZnqmBbP-3z81vwCwyQFYe6uZwfG6MYZavQvhfVuV36-p394Z_6xwsPtr2mhvrhfOS8RzmBtkQCnT8SG55x_Ccjc4TN5mZwkasshbpbAxdzfy3QmaFsjADSKhBTMRPuQl7Au8Q0O2NBouSeLsb13T89LwPxPmuU7wFqLLvywsocZxIXiOgNo-S9x9c6_ZxlUULR7yxEmD_lXRFjYKWPi3mlDNDVpl0kwaxDEHAV9B1MvuZ24w36I_25FolRjoXslju" referrerPolicy="no-referrer" />
                <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full text-slate-900 hover:text-red-500 transition-colors" onClick={(e) => e.preventDefault()}>
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="space-y-0.5">
                <p className="text-lg font-bold">25.00 €</p>
                <p className="text-[11px] text-slate-500">27.60 € incl. Buyer Protection</p>
                <p className="text-xs text-slate-400">26/32 / Levi's / Very Good</p>
              </div>
            </Link>

            {/* Product Card 4 */}
            <Link to="/product/4" className="group cursor-pointer">
              <div className="mb-2 flex items-center gap-2 px-1">
                <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Female profile picture portrait fashion style" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0yfajqhxb1tmJ577xZrvFnmP0PUw4_mKWECFIPe6OaE86Vt_iUcYUNScTyDURkHLMloJ3BA1Df88XJzVzSeBa4TRRheOXUSbERDMFUAGrgCSOUU45VL-D6yalAgezPPBtUAz7eo_I4zMvA60REMPNRjoPDtJU6GnT7IYpYvS4rZalBLKkiXVXcCKzOT3I_uEApUftLOQHJuW3pNfG8ZsMEx9lvo5BivJi3lFfUjEt8n9T66kmIGB_q9js7ITciMAnt_9LMWADA9np" referrerPolicy="no-referrer" />
                </div>
                <span className="text-xs text-slate-600 font-medium">sophie_chic</span>
              </div>
              <div className="relative aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden mb-3">
                <img alt="Silk emerald green slip dress on mannequin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0q1uOW74EaFjhcOaBYrl4JMaEWILJotgB4E_KtRlnycIeHxdy-qgbmcAwwlYYYrzpG4i7gQ3asAFwsCgc94pxzLdsjTLeoPrBkMXsdwGy8nXnGSjSm1D0H4KSROqcEOUZe0_3-bHI89w4hpff8MUMXVdVE0uNkQGU1--lTrmgkVKqdd-8YKSgWKN62S--lkOkyOh48piXcerMfl6C8wSc5c3ACkrF6oTil4zPtdsjYxmnP4xidAtDuE_M_jNQHqlWwOaaFBvJnHT7" referrerPolicy="no-referrer" />
                <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full text-slate-900 hover:text-red-500 transition-colors" onClick={(e) => e.preventDefault()}>
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="space-y-0.5">
                <p className="text-lg font-bold">18.50 €</p>
                <p className="text-[11px] text-slate-500">21.15 € incl. Buyer Protection</p>
                <p className="text-xs text-slate-400">XS / Mango / New with tags</p>
              </div>
            </Link>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center border-t border-slate-200 dark:border-slate-800 pt-8">
            <nav className="flex items-center gap-1">
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 bg-primary text-white font-bold rounded">1</button>
              <button className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">2</button>
              <button className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">3</button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">128</button>
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
