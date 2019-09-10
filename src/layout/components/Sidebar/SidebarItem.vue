<template>
  <div v-if="!item.hidden&&item.children" class="menu-wrapper">
    <el-menu-item
      v-if="item.parentId == -1 && !item.children.length"
      @click="$router.push(item.url)"
      :index="item.url"
      :class="{'submenu-title-noDropdown':!isNest}"
    >
      <i v-if="item.icon" :class="['iconfont', item.icon]"></i>
      <span v-if="item.name" slot="title">{{item.url}}</span>
    </el-menu-item>
    <el-submenu v-else :index="item.name || item.path">
      <template slot="title">
        <i class="el-icon-goods"></i>
        <span v-if="item.name" slot="title">{{item.name}}</span>
      </template>
      <template v-for="child in item.children" v-if="!child.hidden">
        <sidebar-item
          :is-nest="true"
          class="nest-menu"
          v-if="child.children&&child.children.length"
          :item="child"
          :key="child.url"
          :base-path="child.url"
        ></sidebar-item>
        <el-menu-item
          v-else
          @click="$router.push(child.url == null ?'':child.url)"
          :key="child.name"
          :index="child.path == null ?'':child.path"
        >
          <i class="el-icon-edit"></i>
          <span v-if="child.name" slot="title">{{child.name}}</span>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: "SidebarItem",
    props: {
      // route object
      item: {
        type: Object,
        required: true
      },
      basePath: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isNest: false
      };
    }
  };
</script>

