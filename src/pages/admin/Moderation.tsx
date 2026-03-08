export default function Moderation() {
  return (
    <div className="p-6 md:p-10 max-w-[1200px] mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-[-0.033em]">Listings Moderation</h2>
          <p className="text-primary/70 text-base font-medium">Reviewing 248 items awaiting approval</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold border border-primary/10 hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-[18px] mr-2">filter_list</span>
            Filter
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all">
            <span className="truncate">Review Guidelines</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-primary/10">
        <div className="flex gap-8">
          <a className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3" href="#">
            <p className="text-sm font-bold">Pending Review (24)</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-primary/50 hover:text-primary pb-3 transition-colors" href="#">
            <p className="text-sm font-bold">Flagged (12)</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-primary/50 hover:text-primary pb-3 transition-colors" href="#">
            <p className="text-sm font-bold">History</p>
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Item Card 1 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-md transition-shadow group">
          <div
            className="relative w-full aspect-square bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2ddC2ve083tD02s2aWAl8RhNZFhdQZQ-PdRr6KglJEGqPM5EM2TFp3YMZ63bvOGM6_XsvcvlHvF5iwgAYyAnJxBubQGxI5hIH4F7TEQpzicxWb9-yjOuczQuiMSy4QVm4GyxlSiqchX9aYH_cptxnOgr9GH3Qb8xpI1ztr35uzoSfWcMyWDbnaFr6d4qavpqetZqsYmVsY9VQKosBkZCqW8KDEbJdnv-3eUGBuuETrOHvvO9-t28OWAkEcM4JxrlSODngDQvsqDGI')" }}
          >
            <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase rounded tracking-wider">New Upload</div>
          </div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold truncate">Vintage Nike Sweatshirt</h3>
                <span className="text-primary font-black">$45.00</span>
              </div>
              <div className="flex items-center gap-2 text-primary/60 text-sm">
                <span className="material-symbols-outlined text-[16px]">account_circle</span>
                <p className="font-medium">alex_92</p>
                <span className="mx-1">•</span>
                <p>2 mins ago</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-emerald-500/10 text-emerald-600 text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Approve
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-rose-500/10 text-rose-600 text-sm font-bold hover:bg-rose-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">cancel</span>
                Reject
              </button>
            </div>
          </div>
        </div>

        {/* Item Card 2 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-md transition-shadow group">
          <div
            className="relative w-full aspect-square bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDO1NZwRL0VeMvJ7r-5-pup1F5QNKCqEM-0CNOSLKvHNVDGDxEHa98H9t-u3Bcc4ZHndqRLmBBSEEAT1cTPi7Asvv7LrrWVnxaqAu06jMOEmbwFYhK3xAaDe1KQyOkDjUAT-Oo5kt6Mzd1ocXjkxVa-did5dBEpFJe8cutWz9bNn30J8PhGfgt7zqVgj2jTk4tkSgsTTFoTzKWIBukNPSlqWY81-SUELSpFdf6Nf1P6ojnKcVZB1nwRK0C7xDP8T8ve5gYF_szuEHEK')" }}
          >
            <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase rounded tracking-wider">New Upload</div>
          </div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold truncate">Levi's 501 Jeans</h3>
                <span className="text-primary font-black">$60.00</span>
              </div>
              <div className="flex items-center gap-2 text-primary/60 text-sm">
                <span className="material-symbols-outlined text-[16px]">account_circle</span>
                <p className="font-medium">denim_lover</p>
                <span className="mx-1">•</span>
                <p>5 mins ago</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-emerald-500/10 text-emerald-600 text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Approve
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-rose-500/10 text-rose-600 text-sm font-bold hover:bg-rose-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">cancel</span>
                Reject
              </button>
            </div>
          </div>
        </div>

        {/* Item Card 3 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-md transition-shadow group">
          <div
            className="relative w-full aspect-square bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZoyf_LJ9jTrax8PtSdn6dcwLms8Jy7oawsyFwrRpFUA4MSNTvQsVCb8K0AusAXgtrJIte0utdzhlxSb9DIKZBdWBy7ol9pVnowYmKjtHMBbj3sr7Rso62rkfMaw4D-NDxg9sDLVR9J3ndwkrIg3TGjfNFAxpA5buOEDfzX1YLRWsRyV4TRFZUXKrWG4UrlqVx2kVjgDKJrYuZTYIjIGAn5i0B6uBLoAGmwWSUNCo-V55RcH_xnjMMWc2zDFBt10ivQS_kISwLtkKG')" }}
          >
            <div className="absolute top-3 left-3 px-2 py-1 bg-amber-500/90 text-white text-[10px] font-bold uppercase rounded tracking-wider">High Risk Seller</div>
          </div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold truncate">Zara Floral Dress</h3>
                <span className="text-primary font-black">$25.00</span>
              </div>
              <div className="flex items-center gap-2 text-primary/60 text-sm">
                <span className="material-symbols-outlined text-[16px]">account_circle</span>
                <p className="font-medium">sarah_style</p>
                <span className="mx-1">•</span>
                <p>8 mins ago</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-emerald-500/10 text-emerald-600 text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Approve
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-rose-500/10 text-rose-600 text-sm font-bold hover:bg-rose-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">cancel</span>
                Reject
              </button>
            </div>
          </div>
        </div>

        {/* Item Card 4 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-md transition-shadow group">
          <div
            className="relative w-full aspect-square bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDe3FH4gevb0VwSG6oz0HWsOyFLBotR2r-FGXZ_fll8wNO-whrGJqiZJQqqgFYqFZlEKVltH7NwHq0WijTBLSoJ209-_VZWsCmgLP-mfzJeJmTvaDTrwQIrMiwgvCpnV4nsvlUSeA-UxjS-RCoOR4wrl5pI4fW2WjwLmpjaorKZKgbTE0002Ge2FY2Oq-REUugKzwiBKvl53IKBpxppnzioQO64BV20kHMGwd2hfb4Th1hUauDfvoFPoXcHMtC9PHUwKNyXzMtJjnBA')" }}
          >
            <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase rounded tracking-wider">New Upload</div>
          </div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold truncate">Retro Adidas Gazelle</h3>
                <span className="text-primary font-black">$85.00</span>
              </div>
              <div className="flex items-center gap-2 text-primary/60 text-sm">
                <span className="material-symbols-outlined text-[16px]">account_circle</span>
                <p className="font-medium">kickz_collector</p>
                <span className="mx-1">•</span>
                <p>12 mins ago</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-emerald-500/10 text-emerald-600 text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Approve
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-rose-500/10 text-rose-600 text-sm font-bold hover:bg-rose-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">cancel</span>
                Reject
              </button>
            </div>
          </div>
        </div>

        {/* Item Card 5 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-md transition-shadow group">
          <div
            className="relative w-full aspect-square bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-CtlFIZ8Jj9gtbjQobWERfKAU2DWmMI8GO04doEENx15QAvI2a9rmjrNiubk5_AS_-8r85-xsNYvQWGSmBSFLN_1x7qAIgJgBcSz3_wXmrCrSbdrTFvkPA5s6WN_ZqySo1_-hC23jXr8IQc7O7r775eltki6dhPGRf5EcHG4_5DYiZMovvddDLBpET2S8dH8WWAOB0JhEdzxdtQ6y2ZgvKYMw4LqiD4TztDZNdfqqa_6MoTSUv60bnkWifigJJK-TXJjj3tgDEJ0R')" }}
          >
            <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase rounded tracking-wider">New Upload</div>
          </div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold truncate">Handmade Silver Ring</h3>
                <span className="text-primary font-black">$30.00</span>
              </div>
              <div className="flex items-center gap-2 text-primary/60 text-sm">
                <span className="material-symbols-outlined text-[16px]">account_circle</span>
                <p className="font-medium">jewelry_box</p>
                <span className="mx-1">•</span>
                <p>15 mins ago</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-emerald-500/10 text-emerald-600 text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Approve
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-rose-500/10 text-rose-600 text-sm font-bold hover:bg-rose-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">cancel</span>
                Reject
              </button>
            </div>
          </div>
        </div>

        {/* Item Card 6 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-md transition-shadow group">
          <div
            className="relative w-full aspect-square bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtm-9SUga3RuzfA5op6wqeKUdsUYbMQxjMxTg-kxZ-sJSPjczNZaV-xTN-7hW7VXgZ03gLbXhD0EI8xtXSCkk-popT-jXmoZGl4uyMIEL4SakdgiuPO4Smw9tQ3RwNsr9bulG6SpljkkI6GDaTWjkhPWO5h5V3TOTrSy-nd9QxpehR8CJk8N78zm6k6rxV8XfIqFy3Cg7CR0RINmXLd30pyviIThAW0WScPUoCzxdFL9jPS17tCmuE2qvC9BaNF81p3ELnyllWGfZU')" }}
          >
            <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase rounded tracking-wider">New Upload</div>
          </div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold truncate">Wool Blend Coat</h3>
                <span className="text-primary font-black">$120.00</span>
              </div>
              <div className="flex items-center gap-2 text-primary/60 text-sm">
                <span className="material-symbols-outlined text-[16px]">account_circle</span>
                <p className="font-medium">winter_vibes</p>
                <span className="mx-1">•</span>
                <p>20 mins ago</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-emerald-500/10 text-emerald-600 text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Approve
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 bg-rose-500/10 text-rose-600 text-sm font-bold hover:bg-rose-500 hover:text-white transition-all">
                <span className="material-symbols-outlined text-[18px]">cancel</span>
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-10 p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5">
        <p className="text-sm text-primary/60 font-medium">Showing 6 of 248 pending listings</p>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg h-8 w-8 bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-8 w-8 bg-primary text-white font-bold text-xs">1</button>
          <button className="flex items-center justify-center rounded-lg h-8 w-8 text-primary font-bold text-xs hover:bg-primary/5 transition-all">2</button>
          <button className="flex items-center justify-center rounded-lg h-8 w-8 text-primary font-bold text-xs hover:bg-primary/5 transition-all">3</button>
          <button className="flex items-center justify-center rounded-lg h-8 w-8 bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
