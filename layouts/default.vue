<script setup lang="ts"></script>

<template>
  <div id="pc">
    <AppHerade />
    <slot></slot>
    <AppFooter />
  </div>
</template>

<style>
.cont {
  padding: 20px;
}

#pc .banner {
  display: flex;
  height: 420px;
}

#pc .banner img {
  width: 100%;
  height: 420px;
  transition: 1s;
}

@keyframes show {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.w>.list {
  display: flex;
  animation: show .5s linear;
  flex-direction: column;
}

.w>.list>h2 {
  color: white;
  font-size: 18px;
  padding: 8px 14px;
  background-color: #fd5f16;
  border-bottom: 6px solid #E74C00;
}

.w>.list>a {
  display: flex;
  color: #777;
  font-size: 14px;
  padding: 12px 14px;
  align-items: center;
  transition: .2s linear;
  background-color: #f9f9f9;
}

.w>.list>.on,
.w>.list>a:hover {
  color: white;
  background-color: #fd5f16;
}

.w>.list>.product a {
  display: flex;
  padding: 10px;
  column-gap: 10px;
  background-color: #F6F6F6;
}

.w>.list>.product a p {
  overflow: hidden;
}

.w>.list>.product a img {
  width: 100px;
  transition: .5s;
}

.w>.list>.product a:hover img {
  transform: scale(1.1);
}

.w>.list>.product a>p {
  width: 100%;
  display: flex;
  row-gap: 10px;
  overflow: hidden;
  flex-direction: column;
}

.w>.list>.product a>p>span {
  color: #666;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
}

.w>.list>.product a>p>i {
  width: 60px;
  text-align: center;
  color: white;
  font-size: 14px;
  border-radius: 3px;
  padding: 2px 10px;
  font-style: normal;
  background-color: #E74C00;
}

.w>.list>a>span {
  margin-right: 20px;
  border: 5px solid transparent;
  border-left-color: #ccc;
}

.w>.list>p {
  padding: 10px 0;
  padding-left: 40px;
  font-size: 14px;
  position: relative;
  background-color: #F6F6F6;
}

.w>.list>p>.icon {
  position: absolute;
  left: 10px;
  top: 10px;
}

.w>.list>p>span {
  color: #fd5f16;
}

.w>.data>h3 {
  color: #666;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 15px;
  background-color: #F6F6F6;
}

.page svg {
  cursor: pointer;
}
</style>