"""Tests for the example module."""

from krishna_og_hilde_bryllup.example_module import add


def test_add() -> None:
    assert add(3.0, 4.0) == 7.0


def test_add_negative() -> None:
    assert add(-3.0, -4.0) == -7.0


def test_add_zero() -> None:
    assert add(0.0, 0.0) == 0.0
