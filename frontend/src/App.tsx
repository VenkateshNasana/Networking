import React, { useState } from 'react';
import { Activity, Server, ShieldAlert, Network, Settings, Users, Bell, Search, Menu } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-slate-900 text-slate-200 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
        <div className="p-4 border-b border-slate-700 flex items-center gap-2">
          <Network className="text-blue-400" />
          <h1 className="text-xl font-bold text-white tracking-wider">NETOPS</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavItem icon={<Activity size={20}/>} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavItem icon={<Server size={20}/>} label="Devices" active={activeTab === 'devices'} onClick={() => setActiveTab('devices')} />
          <NavItem icon={<Network size={20}/>} label="IPAM / Topology" active={activeTab === 'ipam'} onClick={() => setActiveTab('ipam')} />
          <NavItem icon={<ShieldAlert size={20}/>} label="Alerts & Incidents" active={activeTab === 'alerts'} onClick={() => setActiveTab('alerts')} />
        </nav>

        <div className="p-4 border-t border-slate-700 space-y-2">
          <NavItem icon={<Users size={20}/>} label="Users & Roles" />
          <NavItem icon={<Settings size={20}/>} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 bg-slate-900 px-3 py-1.5 rounded-md border border-slate-700 w-96">
            <Search size={18} className="text-slate-400" />
            <input type="text" placeholder="Search devices, IPs, or alerts..." className="bg-transparent border-none outline-none text-sm w-full text-slate-200 placeholder-slate-500" />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer hover:text-white transition">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
            </div>
            <div className="flex items-center gap-2 border-l border-slate-700 pl-4 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">SA</div>
              <span className="text-sm font-medium">SysAdmin</span>
            </div>
          </div>
        </header>

        {/* Scrollable Main Area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Network Overview</h2>
            <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-emerald-400 border border-slate-700 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              SYSTEM HEALTHY
            </span>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <KpiCard title="Total Devices" value="1,248" trend="+12 this week" color="blue" />
            <KpiCard title="Active Alerts" value="3" trend="-2 from yesterday" color="red" />
            <KpiCard title="Network Latency" value="14 ms" trend="Avg across core" color="emerald" />
            <KpiCard title="Bandwidth Util" value="64%" trend="Peak: 82%" color="amber" />
          </div>

          {/* Charts & Tables Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Table */}
            <div className="lg:col-span-2 bg-slate-800 rounded-lg border border-slate-700 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-slate-700 flex justify-between items-center">
                <h3 className="font-semibold text-white">Critical Alerts</h3>
                <button className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition">View All</button>
              </div>
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-900/50 text-slate-400 text-xs uppercase font-semibold">
                  <tr>
                    <th className="px-4 py-3">Device</th>
                    <th className="px-4 py-3">Issue</th>
                    <th className="px-4 py-3">Severity</th>
                    <th className="px-4 py-3">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  <tr className="hover:bg-slate-700/30 transition">
                    <td className="px-4 py-3 font-medium text-white">Core-Router-NY</td>
                    <td className="px-4 py-3">BGP Peer Down (10.0.0.5)</td>
                    <td className="px-4 py-3"><span className="bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-xs font-bold">CRITICAL</span></td>
                    <td className="px-4 py-3 text-slate-400">2 min ago</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition">
                    <td className="px-4 py-3 font-medium text-white">Dist-Switch-02</td>
                    <td className="px-4 py-3">High CPU Utilization (94%)</td>
                    <td className="px-4 py-3"><span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded text-xs font-bold">WARNING</span></td>
                    <td className="px-4 py-3 text-slate-400">14 min ago</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition">
                    <td className="px-4 py-3 font-medium text-white">FW-Perimeter-01</td>
                    <td className="px-4 py-3">VPN Tunnel Flapping</td>
                    <td className="px-4 py-3"><span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded text-xs font-bold">WARNING</span></td>
                    <td className="px-4 py-3 text-slate-400">1 hr ago</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quick Status */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-4">
              <h3 className="font-semibold text-white mb-4">Infrastructure Status</h3>
              <div className="space-y-4">
                <StatusRow label="Core Network" status="operational" />
                <StatusRow label="Distribution Layer" status="warning" />
                <StatusRow label="Access Layer" status="operational" />
                <StatusRow label="WAN Links" status="operational" />
                <StatusRow label="Security Appliances" status="operational" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
    >
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}

function KpiCard({ title, value, trend, color }: any) {
  const colorMap: any = {
    blue: 'border-blue-500/50 bg-blue-500/10 text-blue-400',
    red: 'border-red-500/50 bg-red-500/10 text-red-400',
    emerald: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400',
    amber: 'border-amber-500/50 bg-amber-500/10 text-amber-400',
  };

  return (
    <div className={`rounded-lg border p-5 ${colorMap[color].split(' ')[1]} border-slate-700 hover:border-slate-500 transition`}>
      <h3 className="text-slate-400 text-sm font-medium mb-2">{title}</h3>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className={`text-xs font-medium ${colorMap[color].split(' ')[2]}`}>{trend}</div>
    </div>
  );
}

function StatusRow({ label, status }: any) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      {status === 'operational' ? (
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Online</span>
      ) : (
        <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-400"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> Degraded</span>
      )}
    </div>
  );
}

export default App;
