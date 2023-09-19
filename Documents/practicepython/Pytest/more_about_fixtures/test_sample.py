import pytest

### 1.Fixtures can request other fixtures

# @pytest.fixture
# def first_entry():
#    print('first fixture setup')
#    return "a"

# @pytest.fixture
# def order(first_entry):
#    print('second fixture setup')
#    return [first_entry]

# def test_string(order):
#    print('Running test')
#    order.append("b")
#    assert order == ["a", "b"]
   
   
### You can see clearly, your test test_string calling order fixture and order fixture is calling first_entry fixture .

### 2.Fixtures are reusable

# @pytest.fixture
# def first_entry():
#    print('first fixture setup') 
#    return "a"

# @pytest.fixture
# def order(first_entry):
#    print('second fixture setup')
#    return [first_entry]


# def test_string(order):
#    print('test_string function')
#    order.append("b")
#    assert order == ["a", "b"]


# def test_int(order):
#    print('test_int funtion')
#    order.append(2)
#    assert order == ["a", 2]


### 3.A test/fixture can request more than one fixture at a time

# @pytest.fixture
# def first_entry():
#    print("first fixture")
#    return "a"

# @pytest.fixture
# def second_entry():
#    print("second fixture")
#    return 2

# @pytest.fixture
# def order(second_entry,first_entry):
#    print("third fixture")
#    return [first_entry,second_entry]

# @pytest.fixture
# def expected_list():
#    print("fourth fixture")
#    return ["a", 2,3.0]

# def test_string(order, expected_list):
#    print("calling test")
#    order.append(3.0)
#    assert order == expected_list
   

### 4.Fixtures can be requested more than once per test (return values are cached)


# @pytest.fixture
# def first_entry():
#    print("first fixture")
#    return "a"

# @pytest.fixture
# def order():
#    print("second fixture")
#    return []

# @pytest.fixture
# def append_first(order, first_entry):
#    print("third fixture")
#    return order.append(first_entry)

# def test_string_only(append_first, order, first_entry):
#    print("test function")
#    assert order == [first_entry]
   
   
### Here the second and third argument that is order and first_entry fixture are already instantiated, so they are cached for every next call.


### 5.Autouse fixtures (fixtures you don't have to request)

@pytest.fixture
def first_entry():
   print("first fixture")
   return "a"

@pytest.fixture
def order(first_entry):
   print("second fixture")
   return []

@pytest.fixture(autouse=True)
def append_first(order, first_entry):
   print("third fixture")
   return order.append(first_entry)

def test_string_only(order, first_entry):
   print("test_string_only")
   assert order == [first_entry]
   
def test_string_and_int(order, first_entry):
   order.append(2)
   print("test_string_and_int")
   assert order == [first_entry, 2]
   
### Here append_first fixture is an autouse fixture, which simply means all test functions will request for this fixture 
### and we need not to feed these fixtures to each test function manually.




