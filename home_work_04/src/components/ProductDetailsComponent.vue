<template>
    <div>
        <h2>Часть 2. Задание Vue</h2>
        <p>
            Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности. <br>
            Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).<br>
            Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".<br>
            В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.<br>
            Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".
        </p>

        <div>
            <div class="options">
                Выберите валюту:
                <select size="1" v-model="currency">
                <option>₽</option>
                <option>€</option>
                <option>$</option>
                </select>
            </div>
        <div v-for="product in products" :key="product.id">
          <p>Название: {{ product.name }}</p>
          <p>Цена: {{ formattedPrice(product.price) }}</p>
          <p v-if="product.available">Статус: Available</p>
          <p v-else>Статус: Out of stock</p>
          <br>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetailsComponent',
    data() {
        return {
            price: '',
            currency: '₽',
            dollar: '',
            euro: '',
            products: [
                { name: 'BMW', price: 2000000, available: false },
                { name: 'MB', price: 3000000, available: false },
                { name: 'Chery', price: 500000, available: true },
            ]
        };
    },
    computed: {
        formattedPrice() {
            if (this.currency === '₽') {
                return price => `${price} рублей`
            } else if (this.currency === '€') {
                return price => `€ ${(price / this.euro).toFixed(2)}`;
            } else {
                return price => `$ ${(price / this.dollar).toFixed(2)}`
            }
        }
    },
    mounted() {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => response.json())
            .then(data => {
                this.dollar = data.Valute.USD.Value;
                this.euro = data.Valute.EUR.Value;
        })
    },
}
</script>

<style scoped>
* {
    margin: 0;
    box-sizing: border-box;
}
.options{
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 1000;
}
</style>
