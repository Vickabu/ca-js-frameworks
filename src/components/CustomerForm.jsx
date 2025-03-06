
export default function CustomerForm({ customer, handleInputChange }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Customer Information</h2>
      <input 
        type="text" name="fullName" placeholder="Full Name" value={customer.fullName} 
        onChange={handleInputChange} className="border p-2 w-full mb-3 rounded shadow-lg"
      />
      <input 
        type="email" name="email" placeholder="Email Address" value={customer.email} 
        onChange={handleInputChange} className="border p-2 w-full mb-3 rounded shadow-lg"
      />
      <input 
        type="text" name="address" placeholder="Shipping Address" value={customer.address} 
        onChange={handleInputChange} className="border p-2 w-full mb-5 rounded shadow-lg"
      />
    </div>
  );
}
