import { IOnboarding } from "./IonboardingBusinessValidation";

class OnboardingValidation implements IOnboarding {
    private constructor() {}
  
    private static instance: IOnboarding = null;
  
    static getInstance() {
      if (!OnboardingValidation.instance) {
        OnboardingValidation.instance = new OnboardingValidation();
      }
      return OnboardingValidation.instance;
    }
}