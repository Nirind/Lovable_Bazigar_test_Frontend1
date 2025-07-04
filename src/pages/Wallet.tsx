import { useState } from "react";
import { CreditCard, Plus, Minus, History, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Wallet = () => {
  const [balance] = useState(1250);
  const [addAmount, setAddAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const transactions = [
    { id: 1, type: "win", amount: 150, game: "Spade Master", date: "2h ago", status: "completed" },
    { id: 2, type: "deposit", amount: 500, game: "UPI Payment", date: "1 day ago", status: "completed" },
    { id: 3, type: "loss", amount: -50, game: "Heart Champion", date: "2 days ago", status: "completed" },
    { id: 4, type: "withdraw", amount: -200, game: "Bank Transfer", date: "3 days ago", status: "completed" },
  ];

  const quickAmounts = [100, 500, 1000, 2000];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 glow-text">My Wallet</h1>
          <p className="text-muted-foreground">Manage your gaming funds securely</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Balance Card */}
          <div className="lg:col-span-1">
            <Card className="game-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Current Balance</CardTitle>
                <CardDescription>Available to play</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">₹{balance}</div>
                <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                  <Shield className="w-4 h-4 mr-1" />
                  100% Secure
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Add/Withdraw Money */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="add" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="add">Add Money</TabsTrigger>
                <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
              </TabsList>

              <TabsContent value="add" className="space-y-6">
                <Card className="game-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Plus className="w-5 h-5 mr-2" />
                      Add Money to Wallet
                    </CardTitle>
                    <CardDescription>
                      Add money securely using UPI, Cards, or Net Banking
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Enter Amount</label>
                      <Input
                        type="number"
                        placeholder="₹ 0"
                        value={addAmount}
                        onChange={(e) => setAddAmount(e.target.value)}
                        className="text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Quick Add</label>
                      <div className="grid grid-cols-4 gap-2">
                        {quickAmounts.map((amount) => (
                          <Button
                            key={amount}
                            variant="outline"
                            onClick={() => setAddAmount(amount.toString())}
                            className="btn-secondary"
                          >
                            ₹{amount}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full btn-primary" size="lg">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Add ₹{addAmount || 0}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="withdraw" className="space-y-6">
                <Card className="game-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Minus className="w-5 h-5 mr-2" />
                      Withdraw Money
                    </CardTitle>
                    <CardDescription>
                      Withdraw your winnings to your bank account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Enter Amount</label>
                      <Input
                        type="number"
                        placeholder="₹ 0"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Available: ₹{balance}
                      </p>
                    </div>

                    <Button className="w-full btn-primary" size="lg">
                      Withdraw ₹{withdrawAmount || 0}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Withdrawals are processed within 24 hours
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Transaction History */}
        <div className="mt-12">
          <Card className="game-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <History className="w-5 h-5 mr-2" />
                Transaction History
              </CardTitle>
              <CardDescription>Your recent wallet transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        transaction.type === "win" || transaction.type === "deposit" 
                          ? "bg-green-500" 
                          : "bg-red-500"
                      }`} />
                      <div>
                        <p className="font-medium">{transaction.game}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.amount > 0 ? "text-green-500" : "text-red-500"
                      }`}>
                        {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount)}
                      </p>
                      <p className="text-sm text-muted-foreground">{transaction.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wallet;