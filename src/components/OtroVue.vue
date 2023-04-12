<template>
    <h3>Otro Componente creado...</h3>
    <p>{{ mssg }}</p>
</template>

<script>
export default {
    name : 'OtroVue',
    props: {
        mssg: String
    }
}
</script>
