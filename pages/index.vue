<template lang="">
    <div class="text-center">
        <displayUsers v-if="showList" :users="users"/>
        <addUser v-else :users="users" :showListState="showListState"/>
        
        <button v-if="showList" type="button" class="btn btn-primary" @click="showListState">Add New User</button>
    </div>
</template>

<script setup>
    const users =ref([]);

    
    let showList = ref(true);
    const showListState =() =>{
        showList.value = !showList.value
    }

    onMounted (()=>{    
    const usersList = JSON.parse(localStorage.getItem("users")); 
    if(usersList){
        users.value = usersList
    }
    })  

    
</script>
