export default function Users() {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-6">
      {/* Page Title & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">User Directory</h1>
          <p className="text-slate-500 mt-1">Manage and monitor 12,458 registered members of the community.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-primary/10 rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-all">
            <span className="material-symbols-outlined text-lg">download</span>
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
            <span className="material-symbols-outlined text-lg">person_add</span>
            Add User
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-primary/5 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 w-full relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input
            className="w-full pl-12 pr-4 py-2.5 bg-primary/5 border-none rounded-lg text-base focus:ring-2 focus:ring-primary/40"
            placeholder="Search by name, email, or user ID..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <button className="whitespace-nowrap flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-semibold">
            All Users <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <button className="whitespace-nowrap flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">
            Active <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <button className="whitespace-nowrap flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">
            Banned <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <button className="whitespace-nowrap flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">
            Joined Date <span className="material-symbols-outlined text-sm">calendar_month</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4">Join Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {/* User Row 1 */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" alt="User profile photo Sarah Miller" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsskoci4eBQZpjupCIVa-je7zfINZCmm1kyDNc6fM4bAp9VDPwCbRObWgEeWaobYWk4kuZnzvOLwKLkv-9BXHhYN10eJ2NuF7pGnFqkWh-KQnkf-NpSjX5QVhC4UP6jTuZXpvx_wKmcZBN0A2ezM4RlnETSI1s3spqVBAcCF3OV_329Q1wgg-fKaDbWmvjnk8AKpuYd9lzt_b1IMtzVWbyd-N-QX0VpbH63taiccpwTajxURK8CkEafAPWkMF5hhwxsxksbFsTBmp4" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-100">Sarah Miller</p>
                      <p className="text-xs text-slate-500">ID: #44921</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">sarah.miller@example.com</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">Oct 12, 2023</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-primary hover:bg-primary/10 rounded" title="Edit User">
                      <span className="material-symbols-outlined text-lg leading-none">edit</span>
                    </button>
                    <button className="p-1.5 text-red-500 hover:bg-red-50/10 rounded" title="Ban User">
                      <span className="material-symbols-outlined text-lg leading-none">block</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* User Row 2 */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" alt="User profile photo James Wilson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMAoldhNF_V0SBrokZ_TpQyIILK8savDapUTsXeG6pKOomq7xyGmxRS53JFqve_cel4dn96AAsy0y-I3hTIGKYiYL1ap9iPFTaVaIivdId5DAKhyz8MU6vs-717BI1ODM6qD-th1v4Ym7_ExckN4eSHxTBkzDOcwcb9kUQZNwWRqHdNIRiap0ebrCmho2imeuXV1I79-tJI4hOlz6tWTbOiHAT-OdMZ569UXnNCFtAfYQIx1iCi19sERuMjNZAQDgH5M2AjAUMTUKM" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-100">James Wilson</p>
                      <p className="text-xs text-slate-500">ID: #44892</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">j.wilson92@company.net</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                    Banned
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">Sep 28, 2023</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-primary hover:bg-primary/10 rounded" title="Edit User">
                      <span className="material-symbols-outlined text-lg leading-none">edit</span>
                    </button>
                    <button className="p-1.5 text-green-500 hover:bg-green-50/10 rounded" title="Unban User">
                      <span className="material-symbols-outlined text-lg leading-none">check_circle</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* User Row 3 */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" alt="User profile photo Amelie Roche" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwB5DQ_EzczTx8lVYSgoSxeiz06xahcyMlu9_Km53pu5O0HTOqXTDVMyF4m-46orYNTZl0vYKBlJG7SGaHV8kvUFBmL5sOsr5Wa3eYkKDmsfXtEyJttlt40_640g504RejrS07THcpV0qUqxuee8ydZy3ctoCLOEH0C9rVV-zElpa0tt34R9huww05hz1AHEcdwWjwgTlZaW0lS247gp3T-MU4977Jpwb8HJG4I7QaGNpIDfA2izhE14cuGLOxLgGN_iKpb7O-OAdo" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-100">Amelie Roche</p>
                      <p className="text-xs text-slate-500">ID: #44877</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">roche.amelie@service.fr</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">Sep 25, 2023</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-primary hover:bg-primary/10 rounded" title="Edit User">
                      <span className="material-symbols-outlined text-lg leading-none">edit</span>
                    </button>
                    <button className="p-1.5 text-red-500 hover:bg-red-50/10 rounded" title="Ban User">
                      <span className="material-symbols-outlined text-lg leading-none">block</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* User Row 4 */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" alt="User profile photo Marcus Thorne" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUawVxObhs-h6x4wK6ly9RtyGN6hOFTPKQQr6c83JlKTXsB0IU_dxdbgvHhx4ygKxXVqOZOgV2NoOItkfWjL7-qvKzVvaYEHCa2ihxOjx4VR8LESdrwPpwidHfopRMnQ8T4TOj_Y0c-yJQpuZv4YH8tvxNCLQVumyJhw1wkAWcqlYCvZFhZqEL-DHehw6u6P86Y-lBPCEWjKIogJaCw-bKF0rai8-dtxQhUoOe8ovMeDz_tI-xE038lIcERIOysEzPgGXFcEm8DXJd" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-100">Marcus Thorne</p>
                      <p className="text-xs text-slate-500">ID: #44812</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">m.thorne@vinted.co.uk</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">Aug 15, 2023</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-primary hover:bg-primary/10 rounded" title="Edit User">
                      <span className="material-symbols-outlined text-lg leading-none">edit</span>
                    </button>
                    <button className="p-1.5 text-red-500 hover:bg-red-50/10 rounded" title="Ban User">
                      <span className="material-symbols-outlined text-lg leading-none">block</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* User Row 5 */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" alt="User profile photo David Park" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG_illL08R5iZqsyUEun1A7qVmC15lXUZ_aPfUJQMbQWsTh7kNPH6NCtb8uvcqHDrMJiMR99mYWOD5x0SA4Bf4QF5HTOQlSN27xUVXm7Nw-Tc8PJkRRZUHd4_4cjDin1yH8RzSTwcYZOIxFfH5aXzit26M_Q1jw363nAlPCErMR8hqr8nWT-IDOcnIr-gsaoOUl8wFCpSBjIY6mVJk1e7ogySP47LBrpeMatX_NcmUGmt24uaCMCT9YElvK3WUCSdw4061eI82PiFg" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-100">David Park</p>
                      <p className="text-xs text-slate-500">ID: #44799</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">park.dvd@provider.com</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">Aug 02, 2023</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-primary hover:bg-primary/10 rounded" title="Edit User">
                      <span className="material-symbols-outlined text-lg leading-none">edit</span>
                    </button>
                    <button className="p-1.5 text-red-500 hover:bg-red-50/10 rounded" title="Ban User">
                      <span className="material-symbols-outlined text-lg leading-none">block</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-primary/5 px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-slate-500">Showing <span className="font-bold">1-10</span> of <span className="font-bold">12,458</span> users</p>
          <div className="flex items-center gap-2">
            <button className="size-8 flex items-center justify-center rounded bg-white dark:bg-slate-700 border border-primary/10 text-slate-400 cursor-not-allowed">
              <span className="material-symbols-outlined text-sm font-bold">chevron_left</span>
            </button>
            <button className="size-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs">1</button>
            <button className="size-8 flex items-center justify-center rounded bg-white dark:bg-slate-700 border border-primary/10 text-slate-600 dark:text-slate-300 font-bold text-xs hover:border-primary transition-colors">2</button>
            <button className="size-8 flex items-center justify-center rounded bg-white dark:bg-slate-700 border border-primary/10 text-slate-600 dark:text-slate-300 font-bold text-xs hover:border-primary transition-colors">3</button>
            <span className="text-slate-400 mx-1">...</span>
            <button className="size-8 flex items-center justify-center rounded bg-white dark:bg-slate-700 border border-primary/10 text-slate-600 dark:text-slate-300 font-bold text-xs hover:border-primary transition-colors">1246</button>
            <button className="size-8 flex items-center justify-center rounded bg-white dark:bg-slate-700 border border-primary/10 text-slate-600 dark:text-slate-300 hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-sm font-bold">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8">
        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Total Users</p>
          <p className="text-2xl font-black">12.4k</p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm">
          <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Active Now</p>
          <p className="text-2xl font-black">1.8k</p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm">
          <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Total Banned</p>
          <p className="text-2xl font-black">432</p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-primary/5 shadow-sm">
          <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">New This Month</p>
          <p className="text-2xl font-black">+892</p>
        </div>
      </div>
    </div>
  );
}
