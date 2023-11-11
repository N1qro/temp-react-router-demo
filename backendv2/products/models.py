from django.db import models
from django.core import validators


class Product(models.Model):
    name = models.CharField(
        max_length=120,
        unique=True,
        verbose_name="название",
    )
    description = models.TextField(
        null=True,
        blank=True,
        verbose_name="описание",
    )
    price = models.DecimalField(
        max_digits=15,
        decimal_places=2,
        validators=[
            validators.MinValueValidator(0),
        ],
        default=0,
        verbose_name="стоимость"
    )

    @property
    def discounted_price(self):
        return float(self.price) * 0.8

    def __str__(self) -> str:
        return self.name[:20]
