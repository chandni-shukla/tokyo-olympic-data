from datetime import datetime

import pytest

from student import Student



@pytest.fixture(params=[21,19])
def dummy_student(request):
    return Student("Manjeet", datetime(2000, 1, 1), "coe", request.param)


@pytest.fixture
def make_dummy_student():
    def _make_dummy_student(name, credits):
        return Student(name, datetime(2000, 1, 1), "coe", credits)

    return _make_dummy_student