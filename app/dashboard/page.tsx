import { Bell, Pill, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8">PRIVAAK</h2>

        <nav className="flex flex-col gap-4">
          <a className="font-medium text-blue-600">Dashboard</a>
          <a className="text-gray-600 hover:text-blue-600">Reminders</a>
          <a className="text-gray-600 hover:text-blue-600">Profile</a>
          <a className="text-gray-600 hover:text-blue-600">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-8">
          Medicine Reminder Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3">
              <Pill className="text-blue-600" />
              <h3 className="font-semibold">Total Medicines</h3>
            </div>
            <p className="text-3xl mt-2">3</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3">
              <Clock className="text-green-600" />
              <h3 className="font-semibold">Next Reminder</h3>
            </div>
            <p className="text-lg mt-2">8:00 PM</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3">
              <Bell className="text-purple-600" />
              <h3 className="font-semibold">Today's Alerts</h3>
            </div>
            <p className="text-3xl mt-2">5</p>
          </div>

        </div>

        {/* Add Reminder */}
        <div className="bg-white p-6 rounded-xl shadow max-w-lg">
          <h2 className="text-xl font-semibold mb-4">
            Add Medicine Reminder
          </h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Medicine Name"
              className="border p-3 rounded-lg"
            />

            <input
              type="time"
              className="border p-3 rounded-lg"
            />

            <input
              type="number"
              placeholder="Dosage (mg)"
              className="border p-3 rounded-lg"
            />

            <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
              Add Reminder
            </button>

          </form>
        </div>

      </main>
    </div>
  );
}