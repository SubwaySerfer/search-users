<template>
  <aside class="sidebar">
    <h2 class="sidebar__title">Поиск сотрудников</h2>
    <input type="text" placeholder="Введите имя" class="sidebar__input" />
    <h3 class="sidebar__title">Результаты</h3>
    <!-- <p class="sidebar__subtitle">ничего не найдено</p> -->
    <ul class="sidebar__users-list">
      <li class="sidebar__users-list__item" v-for="n in 3">
        <img src="@/assets/images/unknown-small.png" alt="no image user." width="70px" height="70px"/>
        <div class="sidebar__users-list__item__info">
          <p class="sidebar__users-list__item__info__name">name</p>
          <p class="sidebar__users-list__item__info__email">email</p>
        </div>
      </li>
    </ul>
  </aside>
</template>
