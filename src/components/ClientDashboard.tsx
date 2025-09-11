'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

// Mock data for dashboard
const mockDashboardData = {
  totalBalance: 125000,
  pendingWithdrawals: 45000,
  completedTransactions: 12,
  activeDeposits: 3,
  recentTransactions: [
    {
      id: '1',
      type: 'deposit',
      amount: 25000,
      status: 'completed',
      date: '2024-01-15',
      description: 'Investment deposit',
      referenceNumber: 'REF17576001234567'
    },
    {
      id: '2',
      type: 'withdrawal',
      amount: 15000,
      status: 'partially_matched',
      date: '2024-01-14',
      description: 'Emergency fund',
      completion: 60,
      referenceNumber: 'REF17576001234568'
    },
    {
      id: '3',
      type: 'deposit',
      amount: 30000,
      status: 'pending',
      date: '2024-01-13',
      description: 'Savings deposit',
      referenceNumber: 'REF17576001234569'
    }
  ]
};



export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white shadow-lg">
          <h1 className="text-4xl font-bold mb-3">
            Welcome to P2P Platform 👋
          </h1>
          <p className="text-blue-100 text-lg mb-4">
            Manage your deposits and withdrawals with our secure peer-to-peer matching system
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-100 font-medium">Platform Online & Ready</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-green-800">Available Balance</CardTitle>
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-2xl">💰</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700 mb-1">
                {formatINR(mockDashboardData.totalBalance)}
              </div>
              <p className="text-sm text-green-600 font-medium">
                Ready for withdrawal
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-blue-800">Pending Withdrawals</CardTitle>
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-2xl">⏳</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700 mb-1">
                {formatINR(mockDashboardData.pendingWithdrawals)}
              </div>
              <p className="text-sm text-blue-600 font-medium">
                Being matched
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-purple-800">Completed</CardTitle>
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-2xl">✅</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-700 mb-1">
                {mockDashboardData.completedTransactions}
              </div>
              <p className="text-sm text-purple-600 font-medium">
                Successful transactions
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-orange-800">Active Deposits</CardTitle>
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-2xl">📈</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-700 mb-1">
                {mockDashboardData.activeDeposits}
              </div>
              <p className="text-sm text-orange-600 font-medium">
                Ready to match
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-lg border-gray-300">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-2xl text-gray-900">Quick Actions</CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Get started with your transactions
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/deposit" className="block group">
                <div className="relative bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex flex-col items-center justify-center space-y-4 min-h-[140px]">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-3xl">💰</span>
                    </div>
                    <h3 className="text-xl font-bold">Create Deposit</h3>
                    <p className="text-green-100 text-sm text-center leading-relaxed">
                      Add money and get matched with withdrawers automatically
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/withdrawal" className="block group">
                <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex flex-col items-center justify-center space-y-4 min-h-[140px]">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-3xl">💸</span>
                    </div>
                    <h3 className="text-xl font-bold">Create Withdrawal</h3>
                    <p className="text-blue-100 text-sm text-center leading-relaxed">
                      Request money and get matched with depositors
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/transactions" className="block group">
                <div className="relative bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex flex-col items-center justify-center space-y-4 min-h-[140px]">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-3xl">📋</span>
                    </div>
                    <h3 className="text-xl font-bold">View History</h3>
                    <p className="text-purple-100 text-sm text-center leading-relaxed">
                      Track all your transactions and matches
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="shadow-lg border-gray-300">
          <CardHeader className="bg-gray-50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl text-gray-900">Recent Transactions</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Your latest deposit and withdrawal activities
                </CardDescription>
              </div>
              <Link href="/transactions">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  View All →
                </button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {mockDashboardData.recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-5 bg-white border-2 border-gray-200 rounded-xl hover:shadow-md hover:border-gray-300 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md ${
                      transaction.type === 'deposit' 
                        ? 'bg-gradient-to-r from-green-400 to-green-500' 
                        : 'bg-gradient-to-r from-blue-400 to-blue-500'
                    }`}>
                      <span className="text-2xl text-white">
                        {transaction.type === 'deposit' ? '💰' : '💸'}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">{transaction.description}</p>
                      <p className="text-xs text-gray-400 font-mono mt-1">
                        Ref: {transaction.referenceNumber}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-gray-900">{formatINR(transaction.amount)}</span>
                      <Badge className={getStatusColor(transaction.status)}>
                        {transaction.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">{transaction.date}</p>
                    
                    {transaction.completion && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Progress</span>
                          <span className="font-medium">{transaction.completion}%</span>
                        </div>
                        <Progress value={transaction.completion} className="h-2 w-32" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Info */}
        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
              ℹ️ How Our P2P Platform Works
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Understanding our secure matching system
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-3xl text-white">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Create Deposits</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Add money to the platform and get automatically matched with users who want to withdraw funds
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-3xl text-white">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Matching</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our advanced algorithm automatically matches deposits with withdrawals based on amount criteria
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-3xl text-white">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Admin Approval</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All transactions are securely reviewed and approved by our admin team for maximum security
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const formatINR = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-800 border border-green-200';
    case 'pending': return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
    case 'partially_matched': return 'bg-purple-100 text-purple-800 border border-purple-200';
    case 'admin_pending': return 'bg-blue-100 text-blue-800 border border-blue-200';
    default: return 'bg-gray-100 text-gray-800 border border-gray-200';
  }
};