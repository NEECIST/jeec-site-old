<template>
    <div class="speakers-app">
        <speakers-list :event_name="event ? event.name : ''"/>
        <contacts :email="event ? event.email : []"/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      event: {name:'JEEC|22',email:'coordination@jeec.ist'},
    };
  },
};
</script>

<style>
</style>
