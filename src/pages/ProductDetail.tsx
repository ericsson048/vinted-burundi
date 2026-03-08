import { Link } from 'react-router-dom';

export default function ProductDetail() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-8 w-full">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link className="hover:underline" to="/">Home</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <Link className="hover:underline" to="/catalog">Men</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <Link className="hover:underline" to="/catalog">Clothing</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-slate-900 dark:text-slate-100 font-medium">Outerwear</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Gallery Section (2/3 width) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div
              className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZjymjNHGyvgK4771i7DogY4WLTF7Rt6pAUaRUpszQ5nuz1qHPaTr0_B3fBpizofXXMOtt5QkwnvNF_5SwPwmO-KzTH1Ww7Yxt1xIzMaYTDdOQBIbNPrB3CPh4mRLuuURpTRsvITDKdFzN1gCMWoiEcjyJ7ECbVUeiTq8U7IN4WWjbJzAeEQi5mb7tXcF6yFXH6d-pnuWvQNFhExprmqCwZmSfPMYeLihAU_RTHgqJ1BtZQBcSTHzd-RUDQpip66gqVm1vjZEmpcAz')" }}
            ></div>
            <div
              className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-ynaxCzkxSOMH-Mcc5otyXd8jdXa0rUmjB_bpogfz1kdewIj71BkKGPE8a0gOYZghAkycIuNd_JB-E2ChcgyZWDiOK9CrK36J8iGzvEWuoTKbPyadwqQS6Z8R1CGB09X0Gcf9Qc2BPXxAuYkizM-lemfuZmbS_ouNCkvk23smoZNP78BanHZYG3PlB7Dj0uz5P3mT66b6K22uJ9UlCK0iPnIpgBNbyCyrdhRu5QMuikJxk0K_byKbspgSeV9_IjKjckC5GGW58XWf')" }}
            ></div>
            <div
              className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNVtMY0msmP0ZI4pNGMdsnU5-6XSzFM_0tLAOJDRSYgahAzK6ye88PVowr4WdLBEbZoOpu8Na9tAEHXcoOavB6feYXDKfSGNsn7L_NmQvq4ZqBgcm1cgrZj6EOSrAavIsn7Kqwe3Bd-B5C_-j-0bCSicOK-dZtePs7mM9aLuiesU9dpK02ReuYgVi8CiMG6Gn_MapPRfB5vcYg5C42oHKOfwpk0K2qlS0q8P9tGlEZOpeivyjwQXSEh03yRrBUOGHQs4jprE5jAOIA')" }}
            ></div>
            <div
              className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxksKVT3v6N4lXPbWoYMaR-W2GJo84nHGd5Q6Sev2OWzyyLw4WQtIm2pL0ZvDTacidxtqBG1x7mgJrOHVspWb5V2S3ba8xrAbMK4PZBO8YY8VbS31-aCxSoApZNLNoA6MglWkdlrLno3ng6Ra8a1i5xJE6HOa4Afj5d1ULK9-reV2-F6Jr7rfzx79NI_1xg_tUsnYxDCJvvw7CjyBb0M6rE0vMq3jgs6fRVx5QWoTyuI4RHru5NGlYfLd4oxdvbDu3DJelDbJSupMM')" }}
            ></div>
          </div>

          {/* Description Card */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-primary/10 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Item description</h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>Beautiful vintage wool overcoat from the late 90s. Heavyweight material, perfect for cold winter days. The color is a deep charcoal grey that looks almost black in some lights.</p>
              <p>Features original horn buttons and a silk-blend lining. Two large exterior pockets and one interior chest pocket. Relaxed fit, fits like a modern Large.</p>
              <div className="pt-4 border-t border-primary/5">
                <div className="grid grid-cols-2 gap-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">straighten</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">Size:</span> L / 52 / 42
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">label</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">Brand:</span> Vintage / No label
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">Condition:</span> Very good
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">palette</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">Color:</span> Charcoal Grey
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Section (1/3 width) */}
        <div className="space-y-6">
          {/* Price & Action Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-3xl font-black text-slate-900 dark:text-slate-100">€85.00</p>
                <p className="text-sm text-slate-500">+ €5.40 Buyer Protection fee</p>
              </div>
              <button className="text-primary hover:bg-primary/5 p-2 rounded-full">
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold text-lg">
                Buy now
              </button>
              <button className="w-full bg-white dark:bg-slate-800 border-2 border-primary text-primary py-3 rounded-lg font-bold text-lg">
                Message
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/10 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Item price</span>
                <span>€85.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-1 text-slate-500">
                  <span>Buyer Protection fee</span>
                  <span className="material-symbols-outlined text-sm cursor-help">info</span>
                </div>
                <span>€5.40</span>
              </div>
              <div className="flex justify-between font-bold text-slate-900 dark:text-slate-100 pt-2 border-t border-primary/5">
                <span>Total</span>
                <span>€90.40</span>
              </div>
            </div>
          </div>

          {/* Seller Info Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="size-16 rounded-full bg-slate-100 border border-primary/10 bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPRk6EEg3KjvfJEInXjd5iCM2bJhYlXdy5GUdI94fqDRhI71F914RaSFdbZXBwxONb3fPfw_mpPEJDsvYW0Xxi6rjZ-eS5EjQtrOTIhqMdY5dLsmj1mTd7P1SgU__B3KNHdMJYbWmP7iBdWbwO7ZIhIti9N_ZARo4kDm5jkfmHQEJqaXsbM6mzXYMbVALKSUIRYmcc1Uk7kGt96i_IIqMyMYWEDGsXxkopEsKrBW2NDXPSMvJWkp56_N2cuKQGBGbDSTj8nXfG9Xre')" }}
              ></div>
              <div>
                <h4 className="font-bold text-lg">Lucas_Archive</h4>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-base fill-1">star</span>
                  <span className="material-symbols-outlined text-base fill-1">star</span>
                  <span className="material-symbols-outlined text-base fill-1">star</span>
                  <span className="material-symbols-outlined text-base fill-1">star</span>
                  <span className="material-symbols-outlined text-base fill-1">star</span>
                  <span className="text-sm font-bold text-slate-500 ml-1">(152)</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary">location_on</span>
                Berlin, Germany
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Active 15 minutes ago
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800">
              View shop
            </button>
          </div>

          {/* Safety Tip */}
          <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex gap-3">
            <span className="material-symbols-outlined text-primary">shield_with_heart</span>
            <div className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              <span className="font-bold block text-primary mb-1">Vinted Safety Tips</span>
              Shop safely with Vinted Buyer Protection. We'll give you a refund if your item doesn't arrive or is significantly not as described.
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <section className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-black">Related items</h3>
          <Link className="text-primary font-bold hover:underline flex items-center gap-1" to="/catalog">
            See more
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Related Card 1 */}
          <Link to="/product/1" className="group cursor-pointer">
            <div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1vy20m_eR9OrMD6Ti5hJTrCgf2JhozkPeNBwIbSEcp-EIwyFE81TnXYMczbSLwo7RTw5TvmNUd3sc3DCTC3PBSM9IlXDk_TDwmhg3MUMvTdUpOz4qAr9GVOZJXrDpr9-Mo5XCxXzif9qwTPLEhqgZVDIlyumyPuq1YVkAm8DixBAFN4sh2UhnUQAerz-7_ppTSQTOv935Y0LqpOsQCe9SUI5YKheelCDe4cuGdB2JXkZlJUNA5cl-1ZIz3d80LBT91v5jqINDY3ll')" }}
              ></div>
              <button className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.preventDefault()}>
                <span className="material-symbols-outlined text-xl">favorite</span>
              </button>
            </div>
            <p className="font-bold text-slate-900 dark:text-slate-100">€45.00</p>
            <p className="text-sm text-slate-500">Zara • L</p>
          </Link>
          {/* Related Card 2 */}
          <Link to="/product/2" className="group cursor-pointer">
            <div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPXQMF2pvZKzCHraIWv7RFmEg_2JkFlT_KkZk3mZ2g2CitodFO4AqO6Sko4FLwLcEvK0MOJNCsCTdh3JRr1W9wFXcHJoNVcDVfDpUe-CUQk641BcZh7lTaxn6IfeVvjlXXj0ul6K1iFFNObQF-2M-1Wn_S0minRzN7m-xEV0labJtdlSqTwxOMHmOlIIBu5_nuDRxtQMmR1YmlycmxY21PCUgNr0Rpp64ldPaQ83r-LzwMf6vsqYqH3IEjD7-rHYTrcfiV-Q7vs8xK')" }}
              ></div>
              <button className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.preventDefault()}>
                <span className="material-symbols-outlined text-xl">favorite</span>
              </button>
            </div>
            <p className="font-bold text-slate-900 dark:text-slate-100">€120.00</p>
            <p className="text-sm text-slate-500">Uniqlo • M</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
