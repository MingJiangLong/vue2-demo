import { Action, Module, Mutation, VuexModule, getModule } from "vuex-module-decorators";
import store from '@/store'
@Module({ name: "Test", dynamic: true, store })
class Test extends VuexModule {

  des = 'handsome boy!'
  count = 0
  get lDes() {
    return 'i am a handsome boy !'
  }

  @Mutation
  mutationMethod() {
    this.count++
  }

  @Action({ commit: "mutationMethod" })
  actionMethod() {
    // todo anything
  }
}
export const TestStore = getModule(Test);