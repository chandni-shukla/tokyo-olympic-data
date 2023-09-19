from sample import add
import pytest

def test_addition():
    assert add(1,2) == 3
    
def test_str_addition():
    assert add('a','b') == 'ab'
    
# class Test_sample:
#     def test_addition(self):
#         assert add(1,2) == 3
    
#     def test_str_addition(self):
#         assert add('a','b') == 'ab'
