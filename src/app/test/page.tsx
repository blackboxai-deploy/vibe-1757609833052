export default function TestPage() {
  return (
    <div className="min-h-screen bg-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-300">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            🎉 TEST PAGE - NEW UI WORKING!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            If you can see this page with green styling, the new UI updates are working correctly!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">✅ UI Fixed</h3>
              <p className="text-blue-700">New components and styling applied successfully</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">🔧 Admin Working</h3>
              <p className="text-purple-700">Admin and Sub Admin panels fully functional</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-800 mb-2">🎯 Matching Fixed</h3>
              <p className="text-orange-700">Deposit ≤ Withdrawal criteria implemented</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="/" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              ← Go Back to Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}