class Customer(db.Entity):
    orders = Set('Order')

class Order(db.Entity):
    customer = Required(Customer)

    class Customer(db.Entity):
    orders = Set('Order')

class Order(db.Entity):
    customer = Required(Customer)class Customer(db.Entity):
    orders = Set('Order')

class Order(db.Entity):
    customer = Required(Customer)