from datetime import datetime

from student import get_topper

from student import Student

import pytest 

# @pytest.fixture
# def dummy_student():
#     return Student("Manjeet", datetime(2000, 1, 1), "coe", 20)


# @pytest.fixture
# def make_dummy_student():
#     def _make_dummy_student(name, credits):
#         return Student(name, datetime(2000, 1, 1), "coe", credits)

#     return _make_dummy_student


def test_student_get_age(dummy_student):
    dummy_student_age = (datetime.now() - dummy_student.dob).days // 365
    assert dummy_student.get_age() == dummy_student_age


def test_student_get_credits(dummy_student):
    assert dummy_student.get_credits() == 20


def test_get_topper(make_dummy_student):
    students = [
        make_dummy_student("ram", 21),
        make_dummy_student("shyam", 19),
        make_dummy_student("Mohan", 22)
    ]

    topper = get_topper(students)

    assert topper == students[2]