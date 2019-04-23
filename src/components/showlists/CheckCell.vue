<template>

            <div class="mui-card">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media">
						<a href="javascript:;">
							<div class="mui-media-body">
								{{newsDate.time}}
								<p class='mui-ellipsis'>{{newsDate.status}}</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
            		
</template>
 
<script>
import { Toast } from "mint-ui";
export default {
  name: 'CheckCell',
  props: {
    newsDate: Object
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  
  }
}
</script>
 
<style scoped>
.financial-list {
  width: 100%;
  height: 200px;
  background-color: white;
  padding: 0.28rem 0;
  border-top: 5px solid #ccc;
}
 
.financial-list .collect {
  width: 92%;
  margin: 0 auto;
}
 
.financial-list .collect aside:nth-of-type(1) {
  width: 63%;
  float: left;
}
 
.financial-list .collect aside:nth-of-type(2) {
  width: 100%;
  height: 2rem;
  float: left;
  margin-left: 0.3rem;
}
 
.financial-list .collect h2 {
  width: 100%;
  height: 30px;
  font-size: 10px;
  color: #333333;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
 
.financial-list .collect aside:nth-of-type(2) img {
  width: 100%;
}
 
.financial-list .collect aside .Cleft {
  width: 45%;
  float: left;
  margin-top: 0.66rem;
}
 
.financial-list .collect aside .Cleft span{
  display: block;
  width: 1.4rem;
  margin-left: 0.05rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}
 
.financial-list .collect aside .Cright {
  width: 55%;
  float: right;
  margin-top: 0.66rem;
}
.financial-list .collect aside .Cright span{
  display: inline-block;
  margin: 0.04rem 0 0 0.05rem;
}
.financial-list .collect aside span {
  font-size: 0.2rem;
  color: #999999;
}
 
.financial-list .collect aside .Cleft img,
.financial-list .collect aside .Cright img {
  width: 0.18rem;
  height: 0.24rem;
  margin-top: 0.09rem;
}
 .mui-card{
  margin: 0px
} 
</style>